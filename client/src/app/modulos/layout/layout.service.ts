import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  login(idUsuario:number) {
    if(idUsuario == 1) {
      return true
    }
    else {
      return false
    }
  }
  
  autenticarUsuario() {
    return true
  }
}
