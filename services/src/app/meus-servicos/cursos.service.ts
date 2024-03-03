import { EventEmitter, Injectable } from "@angular/core";

@Injectable(

)
export class CursosService {

  private cursos: string[] = ['Angular', 'Java', 'Spring'];
  emissorEvento: EventEmitter<string> = new EventEmitter();
  static emissorEventoStatico = new EventEmitter();

  constructor(){
    console.log(this);
  }

  getCursos (){
    return this.cursos;
  }

  salvarCurso (curso: string){
    this.cursos.push(curso);
    this.emissorEvento.emit(curso);
    CursosService.emissorEventoStatico.emit(curso);
  }
}
