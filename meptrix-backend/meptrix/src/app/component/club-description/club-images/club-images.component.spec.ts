import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubImagesComponent } from './club-images.component';

describe('ClubImagesComponent', () => {
  let component: ClubImagesComponent;
  let fixture: ComponentFixture<ClubImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
