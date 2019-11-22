import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectralDiagramComponent } from './spectral-diagram.component';

describe('SpectralDiagramComponent', () => {
  let component: SpectralDiagramComponent;
  let fixture: ComponentFixture<SpectralDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpectralDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectralDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
