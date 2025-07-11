import { Module } from '@nestjs/common';
import { RecadosController } from './recados.controller';
import { RecadosServce } from './recados.service';

@Module({
  controllers: [RecadosController],
  providers: [RecadosServce],
})
export class RecadosModule {}
