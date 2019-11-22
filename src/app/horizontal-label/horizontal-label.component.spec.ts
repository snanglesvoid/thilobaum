import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalLabelComponent } from './horizontal-label.component';

describe('HorizontalLabelComponent', () => {
  let component: HorizontalLabelComponent;
  let fixture: ComponentFixture<HorizontalLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
