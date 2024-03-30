import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestcreationComponent } from './contestcreation.component';

describe('ContestcreationComponent', () => {
  let component: ContestcreationComponent;
  let fixture: ComponentFixture<ContestcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContestcreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContestcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
