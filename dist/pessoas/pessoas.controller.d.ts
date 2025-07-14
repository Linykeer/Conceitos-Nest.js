import { PessoasService } from "./pessoas.service";
import { CreatePessoaDto } from "./dto/create-pessoa.dto";
import { UpdatePessoaDto } from "./dto/update-pessoa.dto";
export declare class PessoasController {
    private readonly pessoasService;
    constructor(pessoasService: PessoasService);
    create(createPessoaDto: CreatePessoaDto): Promise<import("./entities/pessoa.entity").Pessoa>;
    findAll(): Promise<import("./entities/pessoa.entity").Pessoa[]>;
    findOne(id: string): Promise<import("./entities/pessoa.entity").Pessoa>;
    update(id: string, updatePessoaDto: UpdatePessoaDto): Promise<void | import("./entities/pessoa.entity").Pessoa>;
}
