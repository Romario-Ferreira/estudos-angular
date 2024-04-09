import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  usuario: User = {
    email: 'romario@email.com',
    password: '123456'
  }

  isAuthenticatedEmiter: EventEmitter<boolean> = new EventEmitter;
  isAuthenticated: boolean = false;

  constructor(
    private router: Router
  ) { }

  authUsuario(usuario: User){
    if(this.usuario.email == usuario.email &&
      this.usuario.password == usuario.password){
      this.isAuthenticatedEmiter.emit(this.isAuthenticated = true);
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/login']);
    }
   return this.isAuthenticated;
  }

  logoff(){
    this.isAuthenticatedEmiter.emit(this.isAuthenticated = false);
  }
}
