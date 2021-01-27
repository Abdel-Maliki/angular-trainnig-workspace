import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[trainingHighLight]'
})
export class HighLightDirective implements OnInit {

  @HostBinding('style.border') border: string;

  ngOnInit(): void {
    this.border = '5px solid blue';
  }

  @HostListener('mouseover')
  onMouseOver(): void {
    this.border = '5px solid green';
    console.log('Mouse over');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.border = '';
    console.log('Mouse Leave');
  }
}
