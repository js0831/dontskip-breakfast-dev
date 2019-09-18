import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddonsComponent } from './menu-addons.component';

describe('MenuAddonsComponent', () => {
  let component: MenuAddonsComponent;
  let fixture: ComponentFixture<MenuAddonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAddonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
