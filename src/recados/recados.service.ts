import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { RecadoEntity } from './entities/recados.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
@Injectable()
export class RecadosServce {
  private lastId = 1;
  private recados: RecadoEntity[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      data: new Date(),
      de: 'joao',
      para: 'ana',
      lido: false,
    }
  ];
  findAll() {
    return this.recados;
  }
  findOne(id: number){
    const recado = this.recados.find(item => item.id === id)
    if(recado) return recado;
    // throw new HttpException('Recado não encontrado!', HttpStatus.NOT_FOUND);
      this.throwNotFoundError();

  }
  create(createRecadoDto: CreateRecadoDto) {
    this.lastId++;
    const id = this.lastId;
    const newRecado = {
      id,
      ...createRecadoDto,
      lido:false,
      data: new Date()
    };
    this.recados.push(newRecado);
    return newRecado;
  }
  
  updatePatch(id: number, updateRecadoDto: UpdateRecadoDto) {
    const index = this.recados.findIndex(
      item => item.id === id,
    );
    if(index < 0) {
      this.throwNotFoundError();
    }
    if(index >= 0) {
     const recadoExistente = this.recados[index];

     this.recados[index] = {
      ...recadoExistente,
      ...updateRecadoDto,
     }
     return this.recados[index];
    }
  }

  remove(id: number){
    const index = this.recados.findIndex(
      item => item.id === id,
    );
    if(index < 0) {
      this.throwNotFoundError();
    }
    const recado = this.recados[index];
      this.recados.splice(index, 1);

    return recado;
  }

  throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado!');  
  }
}
