import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEmployeesFullNameComponent } from './find-employees-full-name.component';

describe('FindEmployeesFullNameComponent', () => {
  let component: FindEmployeesFullNameComponent;
  let fixture: ComponentFixture<FindEmployeesFullNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindEmployeesFullNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEmployeesFullNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
