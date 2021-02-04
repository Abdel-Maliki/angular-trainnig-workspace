import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorsDocsComponent } from './selectors-docs.component';

describe('SelectorsDocsComponent', () => {
  let component: SelectorsDocsComponent;
  let fixture: ComponentFixture<SelectorsDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorsDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorsDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
