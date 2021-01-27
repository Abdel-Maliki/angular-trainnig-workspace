import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[trainingClass]'
})
export class TrainingClassDirective implements OnInit {

  @Input() trainingClass: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.trainingClass);
  }

}
