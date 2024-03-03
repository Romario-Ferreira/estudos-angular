import { Component } from '@angular/core';

import { CursosService } from '../meus-servicos/cursos.service';

@Component({
  selector: 'app-meus-cursos-dois',
  templateUrl: './meus-cursos-dois.component.html',
  styleUrls: ['./meus-cursos-dois.component.scss'],
  providers: [CursosService]
})
export class MeusCursosDoisComponent {

  cursos: string[] = [];

  constructor(private cursosService: CursosService){
  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
    CursosService.emissorEventoStatico.subscribe(
      curso => this.cursos.push(curso)
    );
  }
}
