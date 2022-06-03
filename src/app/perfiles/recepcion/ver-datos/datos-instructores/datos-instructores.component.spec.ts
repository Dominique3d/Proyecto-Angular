import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosInstructoresComponent } from './datos-instructores.component';

describe('DatosInstructoresComponent', () => {
  let component: DatosInstructoresComponent;
  let fixture: ComponentFixture<DatosInstructoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosInstructoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosInstructoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
