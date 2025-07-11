import { RecadosServce } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
export declare class RecadosController {
    private readonly recadosService;
    constructor(recadosService: RecadosServce);
    findAll(pagination: any): import("./entities/recados.entity").RecadoEntity[];
    findOne(id: number): import("./entities/recados.entity").RecadoEntity;
    create(createRecadoDto: CreateRecadoDto): {
        lido: boolean;
        data: Date;
        texto: string;
        de: string;
        para: string;
        id: number;
    };
    updatePatch(id: number, updateRecadoDto: UpdateRecadoDto): import("./entities/recados.entity").RecadoEntity;
    delete(id: number): import("./entities/recados.entity").RecadoEntity;
}
