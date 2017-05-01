import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmTransactionsComponent } from './atm-transactions.component';

describe('AtmTransactionsComponent', () => {
  let component: AtmTransactionsComponent;
  let fixture: ComponentFixture<AtmTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
