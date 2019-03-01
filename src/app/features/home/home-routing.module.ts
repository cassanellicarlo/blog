import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

const routes: Routes = [
    { path: '', component: JumbotronComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule {}