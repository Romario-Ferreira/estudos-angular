import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.scss'
})
export class FormTemplateComponent {

  name!: string;
  email!: string;

  onSubmit(form: FormGroup){
    console.log(form);
  }
}
