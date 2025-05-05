import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  archives = [
    {
      year: 2025,
      month: 1
    },
    {
      year: 2025,
      month: 2
    },
    {
      year: 2025,
      month: 3
    }
  ];
}
