import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos.component";
import { CursosService } from "./cursos.service";
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from "./cursos-routing.module";
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    CursosFormComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    CursosRoutingModule
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
