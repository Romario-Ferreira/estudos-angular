import { Component } from '@angular/core';

import { CursosService } from '../meus-servicos/cursos.service';

@Component({
  selector: 'app-meus-cursos',
  templateUrl: './meus-cursos.component.html',
  styleUrls: ['./meus-cursos.component.scss'],
  providers: [CursosService]
})
export class MeusCursosComponent {

  cursos: string[];

  constructor(private cursosService: CursosService){
    this.cursos = this.cursosService.getCursos();
  }

  salvarCurso (curso:string){
    this.cursosService.salvarCurso(curso);
  }

}
