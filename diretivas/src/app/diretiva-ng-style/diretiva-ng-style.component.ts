import { Component } from '@angular/core';

@Component({
  selector: 'diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent {

  tamanhoFonte: number = 35;
  textoAlterado: boolean = false;

  alterarTexto (){
    this.textoAlterado = !this.textoAlterado;
  }

}
