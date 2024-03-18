import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDescriptionComponent } from './club-description.component';

describe('ClubDescriptionComponent', () => {
  let component: ClubDescriptionComponent;
  let fixture: ComponentFixture<ClubDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
