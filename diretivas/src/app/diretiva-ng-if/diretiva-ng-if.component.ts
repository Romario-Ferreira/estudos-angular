import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss']
})
export class DiretivaNgIfComponent {

  cursos: string[] = [];
  mostrarCursos: boolean = false;

  constructor(private cursosSevice: CursosService){

  }

  ngOnInit(){
    this.cursos= this.cursosSevice.getCursos();
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
