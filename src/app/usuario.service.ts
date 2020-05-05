import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario/usuario.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:2222/users');
  }

  registrar(usuario:Usuario):Observable<any>{
    return this.http.post("http://localhost:2222/users", usuario);
  }

  getUnicoUsuario(idusuario: number): Observable<Usuario> {
    return this.http.get<Usuario>("http://localhost:2222/users/" + idusuario);
  }


}
