import { Component } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss']
})
export class DiretivaNgForComponent {

  cursos: String[] = [];
  mostrarCursos: boolean = false;

  constructor (private cursoService: CursosService){

  }

  ngOnInit(){
    this.cursos = this.cursoService.getCursos();
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

}
