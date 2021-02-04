import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from './../../index';
import {Observable} from 'rxjs';

@Component({
  selector: 'training-selectors-docs',
  templateUrl: './selectors-docs.component.html',
  styleUrls: ['./selectors-docs.component.scss']
})
export class SelectorsDocsComponent implements OnInit {
  public counter2: Observable<number>;
  public counter4: Observable<number>;
  public counter6: Observable<number>;

  constructor(public store: Store) {
  }

  ngOnInit(): void {
    this.counter2 = this.store.select(fromRoot.getCount(), {id: 'counter2', multiply: 2});
    this.counter4 = this.store.select(fromRoot.getCount(), {id: 'counter4', multiply: 4});
    this.counter6 = this.store.select(fromRoot.getCount(), {id: 'counter6', multiply: 6});

  }

}
