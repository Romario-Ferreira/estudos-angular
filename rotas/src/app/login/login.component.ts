import { Component } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: User = new User();

  constructor(
    private authService: AuthService,
    // private renderer: Renderer2,
    // private el: ElementRef
  ){

  }

  fazerLogin(){
      if(!this.authService.authUsuario(this.usuario)){
        // let span = this.renderer.createElement('span');
        // let textSpan = this.renderer.createText('Email ou Senha invalidos');
        // this.renderer.appendChild(span,textSpan);
        // this.renderer.appendChild(this.el.nativeElement,span)
        alert('Email ou senha invalidos');
      }
  }

}
