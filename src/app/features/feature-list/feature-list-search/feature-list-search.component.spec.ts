import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureListSearchComponent } from './feature-list-search.component';

describe('FeatureListSearchComponent', () => {
  let component: FeatureListSearchComponent;
  let fixture: ComponentFixture<FeatureListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureListSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
