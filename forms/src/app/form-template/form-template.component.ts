import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ViaCepService } from '../shared/via-cep.service';
import { json } from 'stream/consumers';
import { map } from 'rxjs';

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

  consultCEP(cep: string, form: FormGroup){
    this.viaCepService.getByCep(cep).subscribe(resp => {
      this.completeFieldsOfEndereco(form, resp);
    });
    //console.log(cep);
  }

  private completeFieldsOfEndereco(form: FormGroup<any>, resp: any) {
    form.get('endereco')?.get('rua')?.setValue(resp.logradouro as string);
    form.get('endereco')?.get('cidade')?.setValue(resp.localidade as string);
    form.get('endereco')?.get('estado')?.setValue(resp.uf as string);
  }
}
