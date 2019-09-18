import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonSelectComponent } from './addon-select.component';

describe('AddonSelectComponent', () => {
  let component: AddonSelectComponent;
  let fixture: ComponentFixture<AddonSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
