import { Module } from "@nestjs/common";
import { RecadosController } from "./recados.controller";
import { RecadosServce } from "./recados.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecadoEntity } from "./entities/recados.entity";

@Module({
  controllers: [RecadosController],
  providers: [RecadosServce],
  imports: [TypeOrmModule.forFeature([RecadoEntity])],
})
export class RecadosModule {}
