import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsmStatisticsFilterComponent } from './hsm-statistics-filter.component';

describe('HsmStatisticsFilterComponent', () => {
  let component: HsmStatisticsFilterComponent;
  let fixture: ComponentFixture<HsmStatisticsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsmStatisticsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsmStatisticsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
