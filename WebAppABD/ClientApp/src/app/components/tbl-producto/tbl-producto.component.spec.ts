import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblProductoComponent } from './tbl-producto.component';

describe('TblProductoComponent', () => {
  let component: TblProductoComponent;
  let fixture: ComponentFixture<TblProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
