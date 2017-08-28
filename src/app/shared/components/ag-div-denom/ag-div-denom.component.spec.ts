import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDivDenomComponent } from './ag-div-denom.component';

describe('AgDivDenomComponent', () => {
  let component: AgDivDenomComponent;
  let fixture: ComponentFixture<AgDivDenomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgDivDenomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDivDenomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
