import { TestBed } from '@angular/core/testing';

import { ModalEditarPersonaService } from './modal-editar-persona.service';

describe('ModalEditarPersonaService', () => {
  let service: ModalEditarPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalEditarPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
