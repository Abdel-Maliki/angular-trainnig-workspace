import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[trainingToggle]'
})
export class ToggleDirective implements OnInit {

  private elementSelected = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('click')
  private onClicked(): void {
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.el.nativeElement.classList.add('toggle');
    } else {
      this.el.nativeElement.classList.remove('toggle');
    }
  }

}
