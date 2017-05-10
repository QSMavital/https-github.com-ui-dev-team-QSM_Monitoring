import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgStatusComponent } from './ag-status.component';

describe('AgStatusComponent', () => {
  let component: AgStatusComponent;
  let fixture: ComponentFixture<AgStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
