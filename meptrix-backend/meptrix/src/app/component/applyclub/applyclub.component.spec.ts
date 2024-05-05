import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyclubComponent } from './applyclub.component';

describe('ApplyclubComponent', () => {
  let component: ApplyclubComponent;
  let fixture: ComponentFixture<ApplyclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyclubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
