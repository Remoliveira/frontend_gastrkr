import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posto } from './postos/postos.component';

@Injectable({
  providedIn: 'root'
})
export class PostosService {


  constructor(private http: HttpClient){
    
  }

  getPostos(): Observable<Posto[]>{
    return this.http.get<Posto[]>('http://localhost:2222/stations');
  }

  
}