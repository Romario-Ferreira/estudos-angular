import { Component } from '@angular/core';

@Component({
  selector: 'operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss']
})
export class OperadorElvisComponent {

  funcionario: any = {
    'nome': 'Romario',
    responsavel: null
  };

}
