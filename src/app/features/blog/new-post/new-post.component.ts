import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Author } from 'src/app/core/models/author';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postAuthor: Author ={
    id: '',
    username: ''
  }

  newPost: Post = {
    title: '',
    image: '',
    content: '',
    author: this.postAuthor
  };

  constructor(
    private postService: PostService, 
    private auth: AuthenticationService, 
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  addPost (event){
    this.newPost.author.id=this.auth.getUserDetails()._id;
    this.newPost.author.username=this.auth.getUserDetails().name;

    this.postService.addPost(this.newPost).subscribe ( data => {
      console.log(data.message);
      this.alertService.set("Post added!", "success");
      this.router.navigateByUrl('/blog');
    });
    
  }

}
