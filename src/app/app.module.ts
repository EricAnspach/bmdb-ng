import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorDetaiComponent } from './feature/actor/actor-detai/actor-detai.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorCreateComponent,
    ActorEditComponent,
    ActorDetaiComponent,
    ActorDetailComponent,
    ActorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
