import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoClaseBComponent } from './curso-clase-b.component';

describe('CursoClaseBComponent', () => {
  let component: CursoClaseBComponent;
  let fixture: ComponentFixture<CursoClaseBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoClaseBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoClaseBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
