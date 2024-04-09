import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from '../cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {

  curso !: any;
  inscriçao: Subscription = Subscription.EMPTY;
  hasUnsavedChanges: boolean = false;

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(){
    this.inscriçao = this.activatedRoute.params.subscribe(param => {
      if(param['id'] != undefined){
        this.curso = this.cursosService.getCursoById(param['id']);
      }
      else{
        this.curso = {};
      }
      });
  }

  ngOnDestroy(){
    this.inscriçao.unsubscribe();
  }

  salvarCurso(){
   //this.cursosService.save(this.curso);
   this.hasUnsavedChanges = false;
  }

  canDeactivate(){
    return !this.hasUnsavedChanges;
  }

}
