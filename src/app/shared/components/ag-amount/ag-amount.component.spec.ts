import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgAmountComponent } from './ag-amount.component';

describe('AgAmountComponent', () => {
  let component: AgAmountComponent;
  let fixture: ComponentFixture<AgAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
