import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RecadosServce } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosServce) {}

  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 11 } = pagination;
    return this.recadosService.findAll();

  }
 
  @Get(':id')
  findOne(@Param(`id`, ParseIntPipe) id: number) {
    console.log(id);
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDto);
  }

  @Patch(':id')
  updatePatch(@Param(`id`, ParseIntPipe) id: number, @Body() updateRecadoDto: UpdateRecadoDto) {
    return this.recadosService.updatePatch(id, updateRecadoDto);
  }


  @Delete(':id')
  delete(@Param(`id`, ParseIntPipe) id: number) {
    return this.recadosService.remove(id);
  }
}
