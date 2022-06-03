import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosMatriculasComponent } from './pagos-matriculas.component';

describe('PagosMatriculasComponent', () => {
  let component: PagosMatriculasComponent;
  let fixture: ComponentFixture<PagosMatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosMatriculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
