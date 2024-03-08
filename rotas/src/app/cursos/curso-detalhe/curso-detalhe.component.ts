import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes} from '@angular/router'

import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent {

  idCurso !: number;
  nomeCurso !: string;
  incricao: Subscription = Subscription.EMPTY;

  constructor(
    private activateRoute: ActivatedRoute,
    private cursoSerive: CursosService,
    private router: Router) {
    //this.id = this.router.snapshot.params['id'];

  }

  ngOnInit(){
    this.incricao = this.activateRoute.params.subscribe(sub => {
      this.idCurso = sub['id'];
    });

    if(!this.cursoSerive.getCursoById(this.idCurso)){
      this.router.navigate(['cursos/naoEncontrado']);
    }else{
      this.nomeCurso = this.cursoSerive.getCursoById(this.idCurso).nome;
    }

  }

  ngOnDestroy(){
    this.incricao.unsubscribe();
  }
}
