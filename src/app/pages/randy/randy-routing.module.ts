import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandyComponent } from './randy.component';

const routes: Routes = [{
  path: '',
  component: RandyComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandyRoutingModule { }
