import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return null;

    

    let words = value.split(" ");    
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      if (j > 0 && this.isPreposition(word)) {
        words[j] = word.toLocaleLowerCase();
      } else {
        words[j] = this.toTitleCase(word);
      }
    }

    return words.join(" ");
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      "of",
      "the"
    ];

    return prepositions.includes(word.toLocaleLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }
}
