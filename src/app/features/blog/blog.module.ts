import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule } from '@angular/forms';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { PostEditComponent } from './post-edit/post-edit.component';

@NgModule({
  declarations: [PostItemComponent, PostListComponent, NewPostComponent, PostDetailComponent, CommentListComponent, CommentItemComponent, NewCommentComponent, PostEditComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class BlogModule { }
