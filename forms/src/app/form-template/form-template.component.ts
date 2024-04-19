import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ViaCepService } from '../shared/via-cep.service';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.scss',
})
export class FormTemplateComponent {

  name!: string;
  email!: string;
  endereco!: {
    cep: null,
    rua: null,
    complemento: null,
    numero: null,
    cidade: null,
    estado: null
  }

  constructor(private viaCepService: ViaCepService){

  }

  ngOnInit(){
  }

  onSubmit(form: FormGroup){
    console.log(form);
  }

  autoCompleteEndereco(cep: string){
    this.viaCepService.getByCep(cep).subscribe(resp =>
      console.log(resp as string)
    );
    console.log(cep);
  }
}
