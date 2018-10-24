import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'randy',
  loadChildren: './pages/randy/randy.module#RandyModule',
}, {
  path: 'steve',
  loadChildren: './pages/steve/steve.module#SteveModule',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
