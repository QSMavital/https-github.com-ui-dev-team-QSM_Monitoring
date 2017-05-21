import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDateShortComponent } from './ag-date-short.component';

describe('AgDateShortComponent', () => {
  let component: AgDateShortComponent;
  let fixture: ComponentFixture<AgDateShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgDateShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDateShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
