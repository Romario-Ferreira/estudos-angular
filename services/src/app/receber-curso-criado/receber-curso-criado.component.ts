import { Component } from '@angular/core';
import { CursosService } from '../meus-servicos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.scss']
})
export class ReceberCursoCriadoComponent {

  ultimoCursoCriado: string = '';

  constructor(private cursosService: CursosService){
  }

  ngOnInit(){
    this.cursosService.emissorEvento.subscribe(
      curso => this.ultimoCursoCriado = curso
    );
  }

}
