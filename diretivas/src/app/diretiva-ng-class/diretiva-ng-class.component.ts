import { Component } from '@angular/core';

@Component({
  selector: 'diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.scss']
})
export class DiretivaNgClassComponent {
  botaoAtivo: boolean = false;

  onClick (){
    this.botaoAtivo = !this.botaoAtivo;
  }
}
