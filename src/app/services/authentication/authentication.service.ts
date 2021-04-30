import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Valida que podemos acceder a la aplicación
  youAreThanos = false;

  constructor(
  ) { }


  generateToken(): void{
    sessionStorage.setItem('token', 'true');
    this.youAreThanos = true;
  }
}
