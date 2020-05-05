import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private novoUsuario:Usuario;
  private usuarios = new Array<Usuario>();
  private opcao: number;
  
  constructor() { }

  ngOnInit() {
    this.novoUsuario = new Usuario();
  }

  criarUsuario(){
  }
    
}
