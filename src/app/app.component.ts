import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from "./authors/authors.component";
import { FavoriteChangedEventArgs, FavoriteComponent } from "./favorite/favorite.component";
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { DirectiveComponent } from './directive/directive.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContacFormComponent } from "./contac-form/contac-form.component";
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    DirectiveComponent,
    ZippyComponent,
    ContacFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jose Luis Ortiz';
  tweet = {
    body: "Here is the body of a tweet...",
    isLiked: true,
    likesCount: 10
  };

  post = {
    title: "Title",
    isFavorite: true
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  };
}