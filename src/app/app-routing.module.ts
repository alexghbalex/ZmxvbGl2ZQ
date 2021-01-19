import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './components/entities/user-page/user-page.component';

const routes: Routes = [
  { path: 'user/:id', component: UserPageComponent },
  { path: 'user', component: UserPageComponent },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
