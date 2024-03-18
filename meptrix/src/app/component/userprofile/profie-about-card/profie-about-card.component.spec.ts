import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfieAboutCardComponent } from './profie-about-card.component';

describe('ProfieAboutCardComponent', () => {
  let component: ProfieAboutCardComponent;
  let fixture: ComponentFixture<ProfieAboutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfieAboutCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfieAboutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
