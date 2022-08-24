import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarPersonaComponent } from './modal-editar-persona.component';

describe('ModalEditarPersonaComponent', () => {
  let component: ModalEditarPersonaComponent;
  let fixture: ComponentFixture<ModalEditarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
