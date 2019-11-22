import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSvgFrontalComponent } from './speaker-svg-frontal.component';

describe('SpeakerSvgFrontalComponent', () => {
  let component: SpeakerSvgFrontalComponent;
  let fixture: ComponentFixture<SpeakerSvgFrontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerSvgFrontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSvgFrontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
