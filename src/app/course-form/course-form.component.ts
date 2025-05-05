import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
  categories = [
    {
      id: 1,
      name: "Development"
    },
    {
      id: 2,
      name: "Art"
    },
    {
      id: 3,
      name: "Languages"
    }
  ];

  submit(category: any) {
    console.log(category);
  }
}