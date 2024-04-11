import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

const routes: Routes = [
  {path: 'form-template', component: FormTemplateComponent},
  {path: 'form-reactive', component: FormReactiveComponent},
  {path: '' ,pathMatch: 'prefix' ,redirectTo: 'form-template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
