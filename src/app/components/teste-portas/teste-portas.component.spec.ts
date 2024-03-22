import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePortasComponent } from './teste-portas.component';

describe('TestePortasComponent', () => {
  let component: TestePortasComponent;
  let fixture: ComponentFixture<TestePortasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestePortasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestePortasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
