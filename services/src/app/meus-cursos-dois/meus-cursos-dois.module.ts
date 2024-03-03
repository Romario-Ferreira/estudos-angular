import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MeusCursosDoisComponent } from "./meus-cursos-dois.component";
//import { CursosService } from "../meus-servicos/cursos.service";

@NgModule({
  declarations:[
    MeusCursosDoisComponent
  ],
  imports:[
    CommonModule
  ],
  providers:[
    //CursosService
  ],
  exports:[
    MeusCursosDoisComponent
  ]
})
export class MeusCursosDoisModule{

}
