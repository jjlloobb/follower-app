import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  imports: [
    RouterLink
  ],
  templateUrl: './github-profile.component.html',
  styleUrl: './github-profile.component.css'
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        console.log(params.get('id'));
      });
  }

  submit() {
    this.router.navigate(["/followers"],
      {
        queryParams: {
          page: 1,
          order: "newest"
        }
      });
  }
}