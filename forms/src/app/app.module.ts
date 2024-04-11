import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
