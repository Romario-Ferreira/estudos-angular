import { NgModule, Renderer2} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosModule } from './cursos/cursos.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursosModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
    // [{
    //   provide: Renderer2,
    // }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
