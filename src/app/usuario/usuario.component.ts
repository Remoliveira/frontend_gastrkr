import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private novoUsuario: Usuario;
  private usuarios = new Array<Usuario>();
  private opcao: number;

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit() {

    this.novoUsuario = new Usuario();
    this.service.getUsuario().subscribe(usuarios => this.usuarios = usuarios);
    this.opcao = -1;
  }

  registrar(){
    if(this.opcao == 0 ){
      this.service.registrar(this.novoUsuario).subscribe(usuario =>{
        this.usuarios.push(this.novoUsuario);
        this.router.navigate([""]);

    })}
  }
  criarUsuario(){
    this.opcao = 0;
    this.registrar();
  }

}

export class Usuario{

  idusuario: number;
  cpf: String;
  nome: String;
  sobrenome: String;
  eMail: String;
  senha: String;
  reputacao: String;
  
  constructor(){

    this.idusuario =  0;
    this.cpf = "";
    this.nome = "";
    this.sobrenome = "";
    this.eMail = "";
    this.senha =  "";
    this.reputacao = "";
  }
}
