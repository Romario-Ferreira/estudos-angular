import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
    },
    {
      id:3,
      nome: 'SpringBoot'
    }
  ];

  constructor(private router: Router) {

  };

  getCursos(){
    return this.cursos;
  };

  getCursoById(id: number){

    for(let i = 0 ; i < this.getCursos().length; i++){
      if(this.getCursos()[i].id == id){
        return this.getCursos()[i];
      }
    }
    this.router.navigate(['cursos/naoEncontrado']);;
  }

  // save(curso: any){
  //   if(curso.id != undefined){
  //     for(let i = 0 ; i < this.getCursos().length; i++){
  //       if(this.getCursos()[i].id == curso.id){
  //         this.getCursos()[i].nome = curso.nome;
  //         this.router.navigate(['/cursos']);
  //         return this.getCursos()[i];
  //       }
  //     }
  //   }else{
  //     let novoCurso = curso;
  //     novoCurso.id = this.getNextId();
  //     this.cursos.push(novoCurso);
  //     this.router.navigate(['/cursos']);
  //     return novoCurso;
  //   }
  // }

  // getNextId(){
  //   return ++this.getCursos().length;
  // }
}

