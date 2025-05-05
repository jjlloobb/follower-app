import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFormatDirective } from '../directives/input-format.directive';

@Component({
  selector: 'app-directive',
  imports: [
    CommonModule,
    InputFormatDirective
  ],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  viewMode = "map";
  songs: any[] = [];
  canSave = true;
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };

  loadSongs() {
    this.songs = [
      {
        id: 1,
        name: 'song1'
      },
      {
        id: 2,
        name: 'song2'
      },
      {
        id: 3,
        name: "song3"
      }
    ];
  };

  onAdd() {
    if (this.songs.length > 0) {
      let last = this.songs[this.songs.length - 1];
      this.songs.push({
        id: last.id + 1,
        name: `song${last.id + 1}`
      });
    }
    else {
      this.songs.push({
        id: 1,
        name: 'song1'
      });
    }
  };

  onRemove(song: any) {
    let index = this.songs.indexOf(song);
    this.songs.splice(index, 1);
  };

  onChange(song: any) {
    song.name = `${song.name} UPDATED`;
  };

  trackSong(index: number, song: any) {
    return song ? song.id : undefined;
  };
}