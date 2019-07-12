import { MoviegenreListComponent } from './feature/moviegenre/moviegenre-list/moviegenre-list.component';
import { MoviegenreEditComponent } from './feature/moviegenre/moviegenre-edit/moviegenre-edit.component';
import { MoviegenreDetailComponent } from './feature/moviegenre/moviegenre-detail/moviegenre-detail.component';
import { MoviegenreCreateComponent } from './feature/moviegenre/moviegenre-create/moviegenre-create.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { GenreListComponent } from './feature/genre/genre-list/genre-list.component';
import { GenreDetailComponent } from './feature/genre/genre-detail/genre-detail.component';
import { GenreEditComponent } from './feature/genre/genre-edit/genre-edit.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { GenreCreateComponent } from './feature/genre/genre-create/genre-create.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'actor/list', pathMatch: 'full' },
  {path:'actor/create', component: ActorCreateComponent},
  {path:'actor/detail', component: ActorDetailComponent},
  {path:'actor/edit', component: ActorEditComponent},
  {path:'actor/list', component: ActorListComponent},
  {path:'genre/create', component: GenreCreateComponent},
  {path:'genre/edit', component: GenreEditComponent},
  {path:'genre/detail', component: GenreDetailComponent},
  {path:'genre/list', component: GenreListComponent},
  {path:'credit/create', component: CreditCreateComponent},
  {path:'credit/edit', component: CreditEditComponent},
  {path:'credit/detail', component: CreditDetailComponent},
  {path:'credit/list', component: CreditListComponent},
  {path:'movie/create', component: MovieCreateComponent},
  {path:'movie/edit', component: MovieEditComponent},
  {path:'movie/detail', component: MovieDetailComponent},
  {path:'movie/list', component: MovieListComponent},
  {path:'moviegenre/create', component: MoviegenreCreateComponent},
  {path:'moviegenre/detail', component: MoviegenreDetailComponent},
  {path:'moviegenre/edit', component: MoviegenreEditComponent},
  {path:'moviegenre/list', component: MoviegenreListComponent} 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
