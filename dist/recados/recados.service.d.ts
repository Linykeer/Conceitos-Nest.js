import { RecadoEntity } from "./entities/recados.entity";
import { CreateRecadoDto } from "./dto/create-recado.dto";
import { UpdateRecadoDto } from "./dto/update-recado.dto";
import { Repository } from "typeorm";
export declare class RecadosServce {
    private readonly recadoRepository;
    constructor(recadoRepository: Repository<RecadoEntity>);
    findAll(): Promise<RecadoEntity[]>;
    findOne(id: number): Promise<RecadoEntity>;
    create(createRecadoDto: CreateRecadoDto): Promise<RecadoEntity>;
    updatePatch(id: number, updateRecadoDto: UpdateRecadoDto): Promise<void | RecadoEntity>;
    remove(id: number): Promise<void | RecadoEntity>;
    throwNotFoundError(): void;
}
