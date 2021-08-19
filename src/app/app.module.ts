import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostosComponent } from './postos/postos.component';
import { HttpClientModule } from '@angular/common/http';
import { PostosService } from './postos.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario.service';
import { ComentarioComponent } from './comentario/comentario.component';
import { LoginComponent } from './login/login.component';
import { ComentarioService } from './comentario.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PostosComponent,
    UsuarioComponent,
    ComentarioComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PostosService,
    UsuarioService,
    ComentarioService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
