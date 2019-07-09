import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';

const routes: Routes = [
  {path:'', redirectTo: '', pathMatch: 'full' },
  {path:'actor/create', component: ActorCreateComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
