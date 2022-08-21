import { TestBed } from '@angular/core/testing';

import { ModalEditarEstudianteService } from './modal-editar-estudiante.service';

describe('ModalEditarEstudianteService', () => {
  let service: ModalEditarEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalEditarEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
