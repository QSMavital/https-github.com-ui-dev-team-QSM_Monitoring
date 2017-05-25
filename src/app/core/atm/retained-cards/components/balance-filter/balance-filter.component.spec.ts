import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceFilterComponent } from './balance-filter.component';

describe('BalanceFilterComponent', () => {
  let component: BalanceFilterComponent;
  let fixture: ComponentFixture<BalanceFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
