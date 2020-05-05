import { Component } from '@angular/core';
import { Usuario } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  private novoUsuario: Usuario;

  criar(){
    this.novoUsuario = new Usuario();
  }
}
