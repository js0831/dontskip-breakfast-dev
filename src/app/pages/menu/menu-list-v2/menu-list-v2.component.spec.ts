import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListV2Component } from './menu-list-v2.component';

describe('MenuListV2Component', () => {
  let component: MenuListV2Component;
  let fixture: ComponentFixture<MenuListV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
