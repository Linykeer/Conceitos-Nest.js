import { Pessoa } from "src/pessoas/entities/pessoa.entity";
export declare class RecadoEntity {
    id: number;
    texto: string;
    de: Pessoa;
    para: Pessoa;
    lido: boolean;
    data: Date;
    createdAt?: Date;
    updateAt?: Date;
}
