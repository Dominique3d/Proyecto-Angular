import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEstudiantesComponent } from './datos-estudiantes.component';

describe('DatosEstudiantesComponent', () => {
  let component: DatosEstudiantesComponent;
  let fixture: ComponentFixture<DatosEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
