import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
    },
    {
        path: 'followers',
        component: GithubFollowersComponent
    },
    {
        path: "posts",
        component: PostsComponent
    },
    {
        path: "archive/:year/:month",
        component: ArchiveComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];