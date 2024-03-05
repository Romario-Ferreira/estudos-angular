import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent {

  id: string = '';
  incricao: Subscription = Subscription.EMPTY;

  constructor(public router: ActivatedRoute) {
    //this.id = this.router.snapshot.params['id'];

  }

  ngOnInit(){
    this.incricao = this.router.params.subscribe(sub => {
      this.id = sub['id'];
    })
  }

  ngOnDestroy(){
    this.incricao.unsubscribe();
  }
}
