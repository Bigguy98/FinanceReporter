import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatisticComponent } from './payment-statistic.component';

describe('PaymentStatisticComponent', () => {
  let component: PaymentStatisticComponent;
  let fixture: ComponentFixture<PaymentStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
