import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSvgTopComponent } from './speaker-svg-top.component';

describe('SpeakerSvgTopComponent', () => {
  let component: SpeakerSvgTopComponent;
  let fixture: ComponentFixture<SpeakerSvgTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerSvgTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSvgTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
