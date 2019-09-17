import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFoodsComponent } from './menu-foods.component';

describe('MenuFoodsComponent', () => {
  let component: MenuFoodsComponent;
  let fixture: ComponentFixture<MenuFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
