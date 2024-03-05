import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { ExponencialStrenghtPipe } from './meus-pipes/exponencial-strenght.pipe';
import { MeuFiltroPipe } from './meus-pipes/meu-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    ExponencialStrenghtPipe,
    MeuFiltroPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
