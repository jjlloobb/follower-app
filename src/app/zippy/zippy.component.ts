import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  imports: [
    CommonModule
  ],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  @Input() title = "";
  isExpanded = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  };
}