import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private api:APIService) { }

  // Get all posts
  getPosts ():Observable<Post[]>{
    return this.api.request('get', 'posts');
  }

  // Get single post
  getPostById(id:string):Observable<Post>{
    return this.api.request('get', 'posts/'+id);
  }

  // Add new post
  addPost (newPost: Post):Observable<any>{
    return this.api.request('post', 'posts', newPost);
  }

  // Add new comment to a post
  addComment (id:string, newComment: Comment):Observable<Comment>{
    return this.api.request('post', `posts/${id}/comments`, newComment);
  }


}
