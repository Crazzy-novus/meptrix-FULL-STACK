import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiePhotCardComponent } from './profie-phot-card.component';

describe('ProfiePhotCardComponent', () => {
  let component: ProfiePhotCardComponent;
  let fixture: ComponentFixture<ProfiePhotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiePhotCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfiePhotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
