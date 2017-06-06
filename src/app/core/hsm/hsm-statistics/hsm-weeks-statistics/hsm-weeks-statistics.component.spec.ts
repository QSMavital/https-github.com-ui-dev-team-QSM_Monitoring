import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsmWeeksStatisticsComponent } from './hsm-weeks-statistics.component';

describe('HsmWeeksStatisticsComponent', () => {
  let component: HsmWeeksStatisticsComponent;
  let fixture: ComponentFixture<HsmWeeksStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsmWeeksStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsmWeeksStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
