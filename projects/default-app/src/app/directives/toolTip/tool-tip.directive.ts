import {Directive, ElementRef, Renderer2, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[trainingToolTip]'
})
export class ToolTipDirective {

  @Input() toolTip: string;

  elToolTip: any;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.elToolTip) {
      this.showHint();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.elToolTip) {
      this.removeHint();
    }
  }

  removeHint(): void {
    this.renderer.removeClass(this.elToolTip, 'tooltip');
    this.renderer.removeChild(document.body, this.elToolTip);
    this.elToolTip = null;
  }

  showHint(): void {

    this.elToolTip = this.renderer.createElement('span');
    const text = this.renderer.createText(this.toolTip);
    this.renderer.appendChild(this.elToolTip, text);

    this.renderer.appendChild(document.body, this.elToolTip);
    this.renderer.addClass(this.elToolTip, 'tooltip');

    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    // const tooltipPos = this.elToolTip.getBoundingClientRect();

    const top = hostPos.bottom + 10;
    const left = hostPos.left;

    this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
    this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
  }
}
