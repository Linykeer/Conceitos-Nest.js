import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
import { Pessoa } from "./entities/pessoa.entity";
import { Repository } from "typeorm";
export declare class PessoasService {
    private readonly pessoaRepository;
    constructor(pessoaRepository: Repository<Pessoa>);
    throwNotFoundError(): void;
    create(createPessoaDto: CreatePessoaDto): Promise<Pessoa>;
    findAll(): Promise<Pessoa[]>;
    findOne(id: number): Promise<Pessoa>;
    update(id: number, updatePessoaDto: UpdatePessoaDto): Promise<void | Pessoa>;
}
