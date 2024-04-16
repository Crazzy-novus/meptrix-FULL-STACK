import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclubComponent } from './editclub.component';

describe('EditclubComponent', () => {
  let component: EditclubComponent;
  let fixture: ComponentFixture<EditclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditclubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
