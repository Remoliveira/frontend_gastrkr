import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostosComponent } from './postos/postos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"postos",component:PostosComponent},
  {path:"registrar",component:UsuarioComponent},
  {path:"login",component:LoginComponent},
  {path:"comentarios",component:ComentarioComponent},
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
