import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contac-form',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contac-form.component.html',
  styleUrl: './contac-form.component.css'
})
export class ContacFormComponent {
  contactMethods = [
    {
      id: 1,
      name: 'EMail'
    },
    {
      id: 2,
      name: 'Phone'
    }
  ];

  log(firstName: any) {
    console.log(firstName);
  };

  submit(f: any) {
    console.log(f);
  };
}