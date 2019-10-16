import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblEmployeesComponent } from './tbl-employees.component';

describe('TblEmployeesComponent', () => {
  let component: TblEmployeesComponent;
  let fixture: ComponentFixture<TblEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
