import { RecadoEntity } from "src/recados/entities/recados.entity";
export declare class Pessoa {
    id: number;
    email: string;
    passwordHash: string;
    nome: string;
    createdAt?: Date;
    updateAt?: Date;
    recadosEnviados: RecadoEntity[];
    recadosRecebidos: RecadoEntity[];
}
