import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent } from './user/user.component';
import { RepositoryComponent} from './repository/repository.component'

const routes: Routes = [
  {
  path: '',
  component: UserComponent,
  },

  {
    path: 'repo/:name',
    component: RepositoryComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
