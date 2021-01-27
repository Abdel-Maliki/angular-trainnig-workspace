import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'training-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @HostBinding('class') class: string;

  @HostBinding('class.highlight') get hasHighlight(): boolean {
    return true;
  }

  @HostBinding('class.box') get hasBox(): boolean {
    return false;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.class = 'highlight box';
  }

}
