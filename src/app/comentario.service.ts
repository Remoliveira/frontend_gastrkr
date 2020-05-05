import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avalia } from './comentario/comentario.component';
import { Posto } from './postos/postos.component';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  getComment(idposto: number): Observable<Avalia[]>{
    
    return this.http.get<Avalia[]>("http://localhost:2222/comment/"+idposto);
  }

  registrarComentario(avalia:Avalia,idusuario:number,idposto:number):Observable<any>{
    return this.http.post("http://localhost:2222/comment/"+idusuario+"/"+idposto, avalia);
  }

}
