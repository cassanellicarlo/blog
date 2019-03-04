import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  { path: '' , component: PostListComponent},
  { path: 'new' , component: NewPostComponent, canActivate: [AuthGuardService]},
  { path: 'post/:id' , component: PostDetailComponent},
  { path: 'post/:id/edit' , component: PostEditComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
