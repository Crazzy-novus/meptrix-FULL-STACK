import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubHeadComponent } from './club-head.component';

describe('ClubHeadComponent', () => {
  let component: ClubHeadComponent;
  let fixture: ComponentFixture<ClubHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
