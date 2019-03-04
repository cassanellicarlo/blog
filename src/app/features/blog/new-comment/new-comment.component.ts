import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Author } from 'src/app/core/models/author';
import { Comment } from 'src/app/core/models/comment';
import { PostService } from 'src/app/core/services/post.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Output() commentAdded: EventEmitter<Comment> = new EventEmitter();

  newComment: Comment;


  constructor(
    private postService: PostService, 
    public auth: AuthenticationService, 
    private route: ActivatedRoute,
    private alertService: AlertService) { }

  ngOnInit() {
    this.newComment = new Comment ();
  }

  addComment () {
    this.newComment.author=new Author();
    this.newComment.author.id=this.auth.getUserDetails()._id;
    this.newComment.author.username=this.auth.getUserDetails().name;

    const id = this.route.snapshot.paramMap.get('id'); // post id

    this.postService.addComment(id.toString(),this.newComment).subscribe ( comment => {
      this.alertService.set("Comment added!", "success");
      this.commentAdded.emit(comment);
      this.newComment.text='';
    });
  }

}
