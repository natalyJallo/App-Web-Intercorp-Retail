import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerDataComponent } from './list-customer-data.component';

describe('ListCustomerDataComponent', () => {
  let component: ListCustomerDataComponent;
  let fixture: ComponentFixture<ListCustomerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
