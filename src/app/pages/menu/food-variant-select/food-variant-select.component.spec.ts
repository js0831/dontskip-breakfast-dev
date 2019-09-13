import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodVariantSelectComponent } from './food-variant-select.component';

describe('FoodVariantSelectComponent', () => {
  let component: FoodVariantSelectComponent;
  let fixture: ComponentFixture<FoodVariantSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodVariantSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodVariantSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
