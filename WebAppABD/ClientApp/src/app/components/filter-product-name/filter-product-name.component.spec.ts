import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductNameComponent } from './filter-product-name.component';

describe('FilterProductNameComponent', () => {
  let component: FilterProductNameComponent;
  let fixture: ComponentFixture<FilterProductNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProductNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProductNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
