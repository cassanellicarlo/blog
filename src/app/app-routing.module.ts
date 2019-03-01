import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './features/home/home.module#HomeModule'},
  { path: 'auth', loadChildren: './features/authentication/authentication.module#AuthenticationModule'},
  { path: 'blog', loadChildren: './features/blog/blog.module#BlogModule'},
  { path: 'profile', loadChildren: './features/profile/profile.module#ProfileModule', canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
