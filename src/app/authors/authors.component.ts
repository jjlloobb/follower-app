import { Component, Input } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from "../pipes/summary.pipe";

@Component({
  selector: 'app-authors',
  imports: [
    FormsModule,
    CommonModule,
    SummaryPipe
],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  title = "Authors";
  authors: string[] = [];
  imageUrl = "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbW9zfGVufDB8fDB8fHww";
  colSpan = 2;
  isActive = true;
  email3 = "ingjoseluis.jlob@gmail.com";
  email4 = "ingjoseluis.jlob@gmail.com";
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2013, 3, 1)
  };
  text = "DatePipe is executed only when it detects a pure change to the input value. A pure change is either a change to a primitive input value (such as String, Number, Boolean, or Symbol), or a changed object reference (such as Date, Array, Function, or Object).";  

  constructor(private _service: AuthorsService) { };

  ngOnInit() {
    this.authors = this._service.getAuthors();
  };

  getTitle() {
    return this.title;
  };

  onSave($event: any) {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  };

  onDivClicked() {
    console.log("Div was clicked");
  };

  onKeyUp() {
    console.log("Enter was pressed");
  };

  onKeyUp2(email: string) {
    console.log(email);
  };

  onKeyUp3() {
    console.log(this.email3);
  };

  onKeyUp4() {
    console.log(this.email4);
  };  
}