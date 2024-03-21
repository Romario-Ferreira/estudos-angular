import { Injectable } from '@angular/core';
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

  isAuthenticated: boolean = false;

  constructor(
    private router: Router
  ) { }

  authUsuario(usuario: User){
    if(this.usuario.email == usuario.email &&
      this.usuario.password == usuario.password){
      this.isAuthenticated = true;
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/login']);
    }
    return this.isAuthenticated;
  }


}
