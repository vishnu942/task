import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';
import { RegisterComponent } from './register/register.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PostComponent } from './post/post.component';
import { AlbumComponent } from './album/album.component';
import { Album1Component } from './album1/album1.component';
import { ShowphotosComponent } from './showphotos/showphotos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TaskComponent,
    Task1Component,
    RegisterComponent,
    PostComponent,
    AlbumComponent,
    Album1Component,
    ShowphotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
