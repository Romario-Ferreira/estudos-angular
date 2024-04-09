import { Component } from '@angular/core';

import { AuthService } from './login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rotas';

  userAuthSubscription: Subscription;
  isUserAuthenticated !: boolean;

  constructor(private authService: AuthService){
    this.userAuthSubscription = this.authService.isAuthenticatedEmiter.subscribe(
      auth => { this.isUserAuthenticated = auth}
    );
  }

  doLogoff(){
    this.authService.logoff();
  }
}
