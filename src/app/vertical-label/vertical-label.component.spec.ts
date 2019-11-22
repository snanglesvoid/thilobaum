import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLabelComponent } from './vertical-label.component';

describe('VerticalLabelComponent', () => {
  let component: VerticalLabelComponent;
  let fixture: ComponentFixture<VerticalLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
