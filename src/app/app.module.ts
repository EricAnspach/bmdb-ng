import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorDetaiComponent } from './feature/actor/actor-detai/actor-detai.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { GenreCreateComponent } from './feature/genre/genre-create/genre-create.component';
import { GenreEditComponent } from './feature/genre/genre-edit/genre-edit.component';
import { GenreDetailComponent } from './feature/genre/genre-detail/genre-detail.component';
import { GenreListComponent } from './feature/genre/genre-list/genre-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { MoviegenreDetailComponent } from './feature/moviegenre/moviegenre-detail/moviegenre-detail.component';
import { MoviegenreListComponent } from './feature/moviegenre/moviegenre-list/moviegenre-list.component';
import { MoviegenreEditComponent } from './feature/moviegenre/moviegenre-edit/moviegenre-edit.component';
import { MoviegenreCreateComponent } from './feature/moviegenre/moviegenre-create/moviegenre-create.component';
import { AdminLoginComponent } from './feature/admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorCreateComponent,
    ActorEditComponent,
    ActorDetaiComponent,
    ActorDetailComponent,
    ActorListComponent,
    MovieListComponent,
    MovieEditComponent,
    MovieDetailComponent,
    MovieCreateComponent,
    GenreCreateComponent,
    GenreEditComponent,
    GenreDetailComponent,
    GenreListComponent,
    CreditListComponent,
    CreditCreateComponent,
    CreditEditComponent,
    CreditDetailComponent,
    MoviegenreDetailComponent,
    MoviegenreListComponent,
    MoviegenreEditComponent,
    MoviegenreCreateComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
