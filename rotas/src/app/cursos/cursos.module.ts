import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos.component";
import { CursosService } from "./cursos.service";
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


@NgModule({
  declarations:[
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports:[
    CommonModule,
    RouterModule
  ],
  providers:[
    CursosService
  ],
  exports:[
    CursosComponent,
    CursoDetalheComponent
  ]
})
export class CursosModule{

}
