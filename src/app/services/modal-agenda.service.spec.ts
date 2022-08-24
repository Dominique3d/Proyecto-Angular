import { TestBed } from '@angular/core/testing';

import { ModalAgendaService } from './modal-agenda.service';

describe('ModalAgendaService', () => {
  let service: ModalAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
