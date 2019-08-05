import { MoviegenreService } from './service/moviegenre.service';
import { ActorService } from 'src/app/service/actor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { GenreCreateComponent } from './feature/genre/genre-create/genre-create.component';
import { GenreEditComponent } from './feature/genre/genre-edit/genre-edit.component';
import { GenreListComponent } from './feature/genre/genre-list/genre-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { MoviegenreListComponent } from './feature/moviegenre/moviegenre-list/moviegenre-list.component';
import { MoviegenreEditComponent } from './feature/moviegenre/moviegenre-edit/moviegenre-edit.component';
import { MoviegenreCreateComponent } from './feature/moviegenre/moviegenre-create/moviegenre-create.component';
import { AdminLoginComponent } from './feature/admin/admin-login/admin-login.component';
import { MenuComponent } from './core/menu/menu.component';
import { AdminMenuComponent } from './core/admin-menu/admin-menu.component';
import { CreditService } from './service/credit.service';
import { GenreService } from './service/genre.service';
import { MovieService } from './service/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './pipe/sort.pipe';
import { from } from 'rxjs';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { GenreDetailComponent } from './feature/genre/genre-detail/genre-detail.component';
import { HomeComponent } from './feature/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorCreateComponent,
    ActorEditComponent,
    ActorListComponent,
    MovieListComponent,
    MovieEditComponent,
    MovieCreateComponent,
    GenreCreateComponent,
    GenreEditComponent,
    GenreListComponent,
    CreditListComponent,
    CreditCreateComponent,
    CreditEditComponent,
    MoviegenreListComponent,
    MoviegenreEditComponent,
    MoviegenreCreateComponent,
    AdminLoginComponent,
    MenuComponent,
    AdminMenuComponent,
    SortPipe,
    UserLoginComponent,
    ActorDetailComponent,
    MovieDetailComponent,
    GenreDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ActorService,
    CreditService,
    GenreService,
    MovieService,
    MoviegenreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
