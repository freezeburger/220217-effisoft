import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureContentComponent } from './feature-content.component';

describe('FeatureContentComponent', () => {
  let component: FeatureContentComponent;
  let fixture: ComponentFixture<FeatureContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
