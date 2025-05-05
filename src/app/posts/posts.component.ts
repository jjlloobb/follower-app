import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  imports: [
    CommonModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe({
        next: (res: any) => {
          this.posts = res;
        }
      });
  }

  createPost(input: HTMLInputElement): void {
    let post = {
      id: 0,
      title: input.value
    };

    this.service.createPost(post)
      .subscribe({
        next: (res: any) => {
          post.id = res?.id;
          this.posts.splice(0, 0, post);
          console.log(post);
        },
        error: (err: AppError) => {
          if (err instanceof BadInput)
            alert("Test");
          // this.form.setErrors(err.originalError);
          else
            throw err;
        }
      });

    input.value = "";
  }

  updatePost(post: any): void {
    this.service.updatePost(post)
      .subscribe({
        next: (res: any) => {
          console.log(res);
        }
      });
  }

  deletePost(post: any): void {
    this.service.deletePost(post.id)
      .subscribe({
        next: (res: any) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        error: (err: AppError) => {
          if (err instanceof NotFoundError)
            alert("This post has already been deleted.");
          else
            throw err;
        }
      });
  }
}