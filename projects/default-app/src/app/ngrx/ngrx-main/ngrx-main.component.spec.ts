import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxMainComponent } from './ngrx-main.component';

describe('NgrxMainComponent', () => {
  let component: NgrxMainComponent;
  let fixture: ComponentFixture<NgrxMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
