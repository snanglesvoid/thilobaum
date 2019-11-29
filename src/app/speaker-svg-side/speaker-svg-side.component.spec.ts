import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSvgSideComponent } from './speaker-svg-side.component';

describe('SpeakerSvgSideComponent', () => {
  let component: SpeakerSvgSideComponent;
  let fixture: ComponentFixture<SpeakerSvgSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerSvgSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSvgSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
