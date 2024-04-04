import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubcreationComponent } from './clubcreation.component';

describe('ClubcreationComponent', () => {
  let component: ClubcreationComponent;
  let fixture: ComponentFixture<ClubcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubcreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
