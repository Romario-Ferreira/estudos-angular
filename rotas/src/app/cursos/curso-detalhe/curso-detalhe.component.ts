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

  curso !: any;
  incricao: Subscription = Subscription.EMPTY;

  constructor(
    private activateRoute: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router) {
    //this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(){
    this.incricao = this.activateRoute.params.subscribe(param => {
     this.curso = this.cursosService.getCursoById(param['id']);
      // this.idCurso = param['id'];
      // this.verificaCurso(this.idCurso);
    });
  }

  ngOnDestroy(){
    this.incricao.unsubscribe();
  }

  editarCurso(){
    this.router.navigate(['/cursos',this.curso.id,'editar']);
  }

  // verificaCurso(id:number){
  //   if(!this.cursoSerive.getCursoById(id)){
  //     this.router.navigate(['cursos/naoEncontrado']);
  //   }else{
  //     this.nomeCurso = this.cursoSerive.getCursoById(id).nome;
  //   }
  // }
}
