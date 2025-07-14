import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { RecadoEntity } from "./entities/recados.entity";
import { CreateRecadoDto } from "./dto/create-recado.dto";
import { UpdateRecadoDto } from "./dto/update-recado.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
@Injectable()
export class RecadosServce {
  constructor(
    @InjectRepository(RecadoEntity)
    private readonly recadoRepository: Repository<RecadoEntity>,
  ) {}

  async findAll() {
    const recados = await this.recadoRepository.find();
    return recados;
  }
  async findOne(id: number) {
    // const recado = this.recados.find(item => item.id === id)
    const recado = await this.recadoRepository.findOne({
      where: {
        id,
      },
    });
    if (recado) return recado;
    // throw new HttpException('Recado não encontrado!', HttpStatus.NOT_FOUND);
    this.throwNotFoundError();
  }
  async create(createRecadoDto: CreateRecadoDto) {
    const newRecado = {
      ...createRecadoDto,
      lido: false,
      data: new Date(),
    };
    const recado = await this.recadoRepository.create(newRecado);
    return this.recadoRepository.save(recado);
  }

  async updatePatch(id: number, updateRecadoDto: UpdateRecadoDto) {
    const partialUpdateRecadoDto = {
      lido: updateRecadoDto?.lido,
      texto: updateRecadoDto?.texto,
    };
    const recado = await this.recadoRepository.preload({
      id,
      ...partialUpdateRecadoDto,
    });
    if (!recado) {
      return this.throwNotFoundError();
    }
    await this.recadoRepository.save(recado);
    return recado;
  }

  async remove(id: number) {
    const recado = await this.recadoRepository.findOneBy({ id });
    if (!recado) {
      return this.throwNotFoundError();
    }
    return this.recadoRepository.remove(recado);
  }

  throwNotFoundError() {
    throw new NotFoundException("Recado não encontrado!");
  }
}
