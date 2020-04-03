import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTestComponent } from './payment-test.component';

describe('PaymentTestComponent', () => {
  let component: PaymentTestComponent;
  let fixture: ComponentFixture<PaymentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
