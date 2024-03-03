import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusCursosDoisComponent } from './meus-cursos-dois.component';

describe('MeusCursosDoisComponent', () => {
  let component: MeusCursosDoisComponent;
  let fixture: ComponentFixture<MeusCursosDoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeusCursosDoisComponent]
    });
    fixture = TestBed.createComponent(MeusCursosDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
