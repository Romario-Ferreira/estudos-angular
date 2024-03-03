import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MeusCursosComponent } from "./meus-cursos.component";
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component'
//import { CursosService } from "../meus-servicos/cursos.service";

@NgModule({
  declarations:[
    MeusCursosComponent,
    ReceberCursoCriadoComponent
  ],
  imports:[
    CommonModule
  ],
  providers:[
    //CursosService
  ],
  exports:[
    MeusCursosComponent
  ]
})
export class MeusCursosModule{

}
