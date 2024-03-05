import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import '@angular/common/locales/global/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { ExponencialStrenghtPipe } from './meus-pipes/exponencial-strenght.pipe';
import { MeuFiltroPipe } from './meus-pipes/meu-filtro.pipe';
import { MeuFiltroImpuroPipe } from './meus-pipes/meu-filtro-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    ExponencialStrenghtPipe,
    MeuFiltroPipe,
    MeuFiltroImpuroPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
