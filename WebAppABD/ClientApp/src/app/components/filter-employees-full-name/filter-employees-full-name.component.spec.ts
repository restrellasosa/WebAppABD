import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEmployeesFullNameComponent } from './filter-employees-full-name.component';

describe('FilterEmployeesFullNameComponent', () => {
  let component: FilterEmployeesFullNameComponent;
  let fixture: ComponentFixture<FilterEmployeesFullNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterEmployeesFullNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterEmployeesFullNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
