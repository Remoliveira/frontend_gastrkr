import { Component, OnInit, Input } from '@angular/core';
import { ComentarioService } from '../comentario.service';
import { Posto } from '../postos/postos.component';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  private novoAvalia: Avalia;
  private avaliacoes = new Array<Avalia>();
  static avalia: ComentarioComponent;
  static cs: ComentarioService;



  constructor(private service: ComentarioService) { }

  ngOnInit() {
    this.novoAvalia = new Avalia(); 
  }

  getComentarios(idposto: Posto){
    alert("agr ---->"+idposto.idposto);

    
    this.service.getComment(idposto.idposto).subscribe(avaliacoes => {
      this.avaliacoes = avaliacoes;
    });
  }

  public static passagem(idposto: Posto){
    alert("----------------->"+idposto.idposto);
    this.avalia = new ComentarioComponent(this.cs);
    this.avalia.getComentarios(idposto);
  }

}

export class Avalia{

  usuario_idusuario: number;
  posto_idposto: number;
  comentario: String;
  nota: String;
  sugestao: String;
  preco_atual: String;
  idAvalia: number;

  constructor(){

    this.usuario_idusuario = 0;
    this.posto_idposto = 0;
    this.comentario = "";
    this.nota = "";
    this.sugestao = "";
    this.preco_atual = "";
    this.idAvalia = 0;
  }
}
