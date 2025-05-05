import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  imports: [
    CommonModule
  ],
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  @Input() likesCount = 0;
  @Input() isLiked = true;
  @Input() likesCount2 = 0;
  @Input() isLiked2 = true;

  onCLick() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
  };

  onCLick2() {
    this.isLiked2 = !this.isLiked2;
    this.likesCount2 += this.isLiked2 ? 1 : -1;
  };
}