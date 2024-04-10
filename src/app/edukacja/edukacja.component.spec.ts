import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdukacjaComponent } from './edukacja.component';

describe('EdukacjaComponent', () => {
  let component: EdukacjaComponent;
  let fixture: ComponentFixture<EdukacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdukacjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdukacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
