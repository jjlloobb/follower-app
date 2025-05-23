import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input("appInputFormat") format = "";

  constructor(private el: ElementRef) { }

  @HostListener("blur") onBlur() {    
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = (this.format == "uppercase") ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}