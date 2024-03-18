import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfieClubsCardComponent } from './profie-clubs-card.component';

describe('ProfieClubsCardComponent', () => {
  let component: ProfieClubsCardComponent;
  let fixture: ComponentFixture<ProfieClubsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfieClubsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfieClubsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
