import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private http: HttpClient) { }

  getByCep(cep: string){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
