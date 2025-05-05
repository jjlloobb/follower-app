import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite',
  imports: [
    FormsModule,
    CommonModule,
    TitleCasePipe
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  inputs: [
    "isFavorite"
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FavoriteComponent {
  titleText = "";
  @Input("is-favorite") isFavorite = true;
  @Output("change") click = new EventEmitter();
  isFavorite2 = true;

  onCLick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({
      newValue: this.isFavorite
    });
  };

  onCLick2() {
    this.isFavorite2 = !this.isFavorite2;    
  };
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}