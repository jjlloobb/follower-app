import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  imports: [],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent implements OnInit {
  year = 1;
  month = 1;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.year = parseInt(params.get("year") ?? "0");
        this.month = parseInt(params.get("month") ?? "0");
      });
  }

  viewAll() {
    this.router.navigate(["/"]);
  }
}