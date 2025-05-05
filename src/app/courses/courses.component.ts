import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  title = "List of courses";  
  courses: string[] = [];

  constructor(private _service: CoursesService) {};

  ngOnInit() {
    this.courses = this._service.getCourses();
  };

  getTitle() {
    return this.title;
  };
}