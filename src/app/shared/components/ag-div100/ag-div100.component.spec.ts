import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDiv100Component } from './ag-div100.component';

describe('AgDiv100Component', () => {
  let component: AgDiv100Component;
  let fixture: ComponentFixture<AgDiv100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgDiv100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDiv100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
