import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { Pessoa } from "./entities/pessoa.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PessoasService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  throwNotFoundError() {
    throw new NotFoundException("Pessoa não encontrada!");
  }
  async create(createPessoaDto: CreatePessoaDto) {
    try {
      const novaPessoa = {
        nome: createPessoaDto.nome,
        email: createPessoaDto.email,
        passwordHash: createPessoaDto.password,
      };
      const pessoa = this.pessoaRepository.create(novaPessoa);

      await this.pessoaRepository.save(pessoa);
      return pessoa;
    } catch (error) {
      if(error.code === '23505') {
        throw new ConflictException('E-mail já cadastrado!');
      }
      throw error;
    }
  }

  async findAll() {
    const pessoas = await this.pessoaRepository.find();
    return pessoas;
  }

  async findOne(id: number) {
    const recado = await this.pessoaRepository.findOne({
      where: {
        id,
      },
    });
    if (recado) return recado;

    this.throwNotFoundError();
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    const partialUpdatePessoaDto = {
      nome: updatePessoaDto?.nome,
      passwordHash: updatePessoaDto?.password,
    };
   
    const pessoa = await this.pessoaRepository.preload({
      id,
      ...partialUpdatePessoaDto,
    });
    if (!pessoa) {
      return this.throwNotFoundError();
    }
    return this.pessoaRepository.save(pessoa);
  }
}
