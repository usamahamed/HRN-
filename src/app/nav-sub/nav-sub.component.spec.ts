import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubComponent } from './nav-sub.component';

describe('NavSubComponent', () => {
  let component: NavSubComponent;
  let fixture: ComponentFixture<NavSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
