import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  createPost(input: {
    id: number
    title: string
  }) {
    let post = {
      title: input
    };
    return this.http.post(this.apiUrl, JSON.stringify(post))
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePost(post: any) {
    return this.http.patch(this.apiUrl + "/" + post.id, JSON.stringify({
      isRead: true
    }))
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePost(id: number) {
    return this.http.delete(this.apiUrl + "/" + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: Response): ObservableInput<any> {
    if (err.status === 400)
      throw new BadInput(err);

    if (err.status === 404)
      throw new NotFoundError(err);

    throw new AppError(err);
  }
}