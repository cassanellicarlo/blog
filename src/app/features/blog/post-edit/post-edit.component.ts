import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  modifiedPost: Post;
  postId: string;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getPost();
  }
  
  // Get post info to display in the form
  getPost () {
    this.modifiedPost=new Post();
    this.postId = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(this.postId).subscribe ( post => {
      this.modifiedPost=post;
    });
  }

  // Edit post
  editPost (event){
    this.postService.modifyPost(this.postId,this.modifiedPost).subscribe ( data => {
      this.alertService.set(data.message, "success");
      this.router.navigateByUrl('/blog');
    }, (err) => {
      console.error(err);
      this.alertService.set(err.error.message,"danger");
      this.router.navigateByUrl('/blog');
    });
  }

}
