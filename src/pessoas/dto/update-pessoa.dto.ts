import { PartialType } from "@nestjs/mapped-types";
import { CreatePessoaDto } from "./create-pessoa.dto";
import { IsOptional, IsString } from "class-validator";

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {

}
