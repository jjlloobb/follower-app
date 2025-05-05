import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, ObservableInput } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  private apiUrl = "https://api.github.com/users/mosh-hamedani/followers";

  constructor(private http: HttpClient) { }

  getFollowers() {
    return this.http.get(this.apiUrl)
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
