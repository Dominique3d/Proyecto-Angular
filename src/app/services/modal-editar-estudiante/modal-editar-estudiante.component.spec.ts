import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEstudianteComponent } from './modal-editar-estudiante.component';

describe('ModalEditarEstudianteComponent', () => {
  let component: ModalEditarEstudianteComponent;
  let fixture: ComponentFixture<ModalEditarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
