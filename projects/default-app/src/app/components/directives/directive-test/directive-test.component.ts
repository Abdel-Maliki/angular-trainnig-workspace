import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'training-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.scss']
})
export class DirectiveTestComponent implements OnInit {

  show = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
