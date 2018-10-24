import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SteveComponent } from './steve.component';

const routes: Routes = [{
  path: '',
  component: SteveComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SteveRoutingModule { }
