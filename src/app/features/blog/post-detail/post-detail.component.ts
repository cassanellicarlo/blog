import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { Comment } from 'src/app/core/models/comment';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  loading: boolean=true;
  postId: string;
  showModal: boolean=false;

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute, 
    public auth: AuthenticationService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.post = new Post();
    this.getPostById();
  }

  getPostById(){
    this.loading=true;
    this.postId= this.route.snapshot.paramMap.get('id');

    this.postService.getPostById(this.postId).subscribe ( post => {
      this.loading=false;
      this.post=post;
    });
  }

  // Push new comment in comments array 
  updateComments (newComment: Comment){
    this.post.comments.push(newComment);
  }

  // Delete the post after confirm
  deletePost(event){
    this.showModal=false;
    this.postService.deletePost(this.postId).subscribe ( data => {
      this.alertService.set(data.message, "success");
      this.router.navigateByUrl('/blog');
    }, (err) => {
      this.alertService.set(err.error.message,"danger");
      this.router.navigateByUrl('/blog');
    });
  }

}
