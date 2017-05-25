import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmStatusSummaryComponent } from './atm-status-summary.component';

describe('AtmStatusSummaryComponent', () => {
  let component: AtmStatusSummaryComponent;
  let fixture: ComponentFixture<AtmStatusSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmStatusSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmStatusSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
