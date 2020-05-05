import { Component, OnInit } from '@angular/core';
import { PostosService } from '../postos.service';
import { Router } from '@angular/router';
import { ComentarioComponent, Avalia } from '../comentario/comentario.component';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-postos',
  templateUrl: './postos.component.html',
  styleUrls: ['./postos.component.css']
})
export class PostosComponent implements OnInit {

  
  private novoPosto: Posto;
  private novoAvalia: Avalia;
  private idEstado:number;
  private avaliacoes = new Array<Avalia>();
  private postos = new Array<Posto>();
  comentario: ComentarioComponent;
  private opcao: number;
  

  constructor(private service:PostosService, private router:Router, private commentService: ComentarioService) { }
  
  ngOnInit() {
    
    this.opcao = 0;
    this.novoPosto = new Posto();
    this.novoAvalia = new Avalia();
    this.service.getPostos().subscribe(postos => this.postos = postos);
  
  }

  levarComentario(idposto: Posto){
    this.commentService.getComment(idposto.idposto).subscribe(avaliacoes => {
      this.avaliacoes = avaliacoes;
    }); 
  }

  salvarIdPosto(posto:Posto,){
    
    this.idEstado = posto.idposto;
    //this.salvarComentario(this.idEstado);
    
  }

  salvarComentario(idposto:number){
 
    if(this.opcao == 1){
      this.salvarBanco(idposto,this.novoAvalia);
    }
  }

  salvarBanco(idposto:number,avalia:Avalia){
   
    this.commentService.registrarComentario(this.novoAvalia,this.novoAvalia.usuario_idusuario,this.idEstado).subscribe(avalia =>{
      this.avaliacoes.push(this.novoAvalia);
    });
  }

  ok(){
    this.opcao = 1;
  }
  

}

export class Posto{
  idposto: number;
  media_nota: number;
  preco: number;
  nome_posto: string;
  endereco: string;
  imagemUrl: string;

  constructor(){
    this.idposto = 0;
    this.media_nota = 0;
    this.preco = 0;
    this.nome_posto = "";
    this.endereco = "";
    this.imagemUrl = "";
  }
}
