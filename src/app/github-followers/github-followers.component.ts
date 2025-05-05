import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-github-followers',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './github-followers.component.html',
  styleUrl: './github-followers.component.css'
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(private route: ActivatedRoute, private service: FollowersService) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .subscribe(combined => {
        console.log(combined[1].get("page"));
        console.log(combined[1].get("order"));
      });

    this.service.getFollowers()
      .subscribe({
        next: (res: any) => {
          this.followers = res;
        }
      });
  }
}
