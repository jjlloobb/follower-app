import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-course-form.component.html',
  styleUrl: './new-course-form.component.css'
})
export class NewCourseFormComponent {
  // form = new FormGroup({
  //   name: new FormControl("", Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  get name() {
    return this.form.get("name");
  }

  get email() {
    return this.form.get("contact.email");
  }

  get phone() {
    return this.form.get("contact.phone");
  }

  get topics() {
    return (this.form.get("topics") as FormArray);
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = "";
  }

  removeTopic(topic: any) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}