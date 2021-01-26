import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAndComponentOutletMainComponent } from './template-and-component-outlet-main.component';

describe('TemplateAndComponentOutletMainComponent', () => {
  let component: TemplateAndComponentOutletMainComponent;
  let fixture: ComponentFixture<TemplateAndComponentOutletMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAndComponentOutletMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAndComponentOutletMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
