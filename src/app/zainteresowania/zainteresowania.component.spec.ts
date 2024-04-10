import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZainteresowaniaComponent } from './zainteresowania.component';

describe('ZainteresowaniaComponent', () => {
  let component: ZainteresowaniaComponent;
  let fixture: ComponentFixture<ZainteresowaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZainteresowaniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZainteresowaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
