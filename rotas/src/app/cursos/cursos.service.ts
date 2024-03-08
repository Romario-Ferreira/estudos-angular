import { Injectable } from '@angular/core';

@Injectable(

)
export class CursosService {

  cursos: any[] = [
    {
       id: 1,
       nome: 'Java'
    },
    {
      id: 2,
      nome: 'Angular'
    }
  ];

  constructor() { };

  getCursos(){
    return this.cursos;
  };

  getCursoById(id: number){

    for(let i = 0 ; i < this.getCursos().length; i++){
      if(this.getCursos()[i].id == id){
        return this.getCursos()[i];
      }
    }
    return false;
  }


}

