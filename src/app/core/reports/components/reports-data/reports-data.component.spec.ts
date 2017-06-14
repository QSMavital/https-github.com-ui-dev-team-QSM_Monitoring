import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsDataComponent } from './reports-data.component';

describe('ReportsDataComponent', () => {
  let component: ReportsDataComponent;
  let fixture: ComponentFixture<ReportsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
