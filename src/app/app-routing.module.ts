import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { AlbumComponent } from './album/album.component';
import { Album1Component } from './album1/album1.component';
import { ShowphotosComponent } from './showphotos/showphotos.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  
  {path:'login',component:LoginComponent},
  {path:'dash',component:DashboardComponent},
  {path:'task',component:TaskComponent},
  {path:'task1',component:Task1Component},
  {path:'register',component:RegisterComponent},
  {path:'post',component:PostComponent},
  {path:'album',component:AlbumComponent},
  {path:'album1',component:Album1Component},
  {path:'showphoto',component:ShowphotosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
