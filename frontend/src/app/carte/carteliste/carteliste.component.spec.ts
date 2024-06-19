import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelisteComponent } from './carteliste.component';

describe('CartelisteComponent', () => {
  let component: CartelisteComponent;
  let fixture: ComponentFixture<CartelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartelisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
