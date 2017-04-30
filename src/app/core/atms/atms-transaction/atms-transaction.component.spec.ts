import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsTransactionComponent } from './atms-transaction.component';

describe('AtmsTransactionComponent', () => {
  let component: AtmsTransactionComponent;
  let fixture: ComponentFixture<AtmsTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
