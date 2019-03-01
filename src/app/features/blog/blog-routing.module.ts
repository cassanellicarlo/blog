import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';

const routes: Routes = [
  { path: '' , component: PostListComponent},
  { path: 'new' , component: NewPostComponent, canActivate: [AuthGuardService]},
  { path: 'post/:id' , component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
