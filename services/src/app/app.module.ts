import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeusCursosModule } from './meus-cursos/meus-cursos.module'
import { MeusCursosDoisModule } from './meus-cursos-dois/meus-cursos-dois.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeusCursosModule,
    MeusCursosDoisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
