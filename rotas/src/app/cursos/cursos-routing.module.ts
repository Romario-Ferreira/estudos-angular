import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CursosComponent } from "./cursos.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosFormComponent } from "./cursos-form/cursos-form.component";

const cursosRoutes: Routes = [
  {path:'cursos/novo', component: CursosFormComponent},
  {path:'cursos', component: CursosComponent,
    children:[
      {path:'naoEncontrado', component: CursoNaoEncontradoComponent},
      {path:':id', component: CursoDetalheComponent},
      {path:':id/editar', component: CursosFormComponent}
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(cursosRoutes)],
  exports:[RouterModule]
})
export class CursosRoutingModule {}
