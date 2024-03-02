import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
 // outputs: ['emitFilme']
})
export class OutputPropertyComponent {
  eventEmitter = new EventEmitter;
  @Output() emitFilme = this.eventEmitter;
  @Output() emitValor = this.eventEmitter;
  @Input() valor: number= 0;
  nomeFilme: string='';

  setNomeFilme(nomeFilme: string){
    this.nomeFilme = nomeFilme;
    this.emitFilme.emit({nomeFilme:this.nomeFilme});
  }

  incrementa(){
    this.valor++;
    this.emitValor.emit({valor: this.valor})
  }

  decrementa(){
    this.valor--;
    this.emitValor.emit({valor: this.valor})
  }
}
