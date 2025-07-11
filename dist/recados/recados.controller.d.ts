import { RecadosServce } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
export declare class RecadosController {
    private readonly recadosService;
    constructor(recadosService: RecadosServce);
    findAll(pagination: any): Promise<import("./entities/recados.entity").RecadoEntity[]>;
    findOne(id: number): Promise<import("./entities/recados.entity").RecadoEntity>;
    create(createRecadoDto: CreateRecadoDto): Promise<import("./entities/recados.entity").RecadoEntity>;
    updatePatch(id: number, updateRecadoDto: UpdateRecadoDto): Promise<void | import("./entities/recados.entity").RecadoEntity>;
    delete(id: number): Promise<void | import("./entities/recados.entity").RecadoEntity>;
}
