import { RecadoEntity } from './entities/recados.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
export declare class RecadosServce {
    private lastId;
    private recados;
    findAll(): RecadoEntity[];
    findOne(id: number): RecadoEntity;
    create(createRecadoDto: CreateRecadoDto): {
        lido: boolean;
        data: Date;
        texto: string;
        de: string;
        para: string;
        id: number;
    };
    updatePatch(id: number, updateRecadoDto: UpdateRecadoDto): RecadoEntity;
    remove(id: number): RecadoEntity;
    throwNotFoundError(): void;
}
