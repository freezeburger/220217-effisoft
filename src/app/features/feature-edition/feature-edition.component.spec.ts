import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEditionComponent } from './feature-edition.component';

describe('FeatureEditionComponent', () => {
  let component: FeatureEditionComponent;
  let fixture: ComponentFixture<FeatureEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
