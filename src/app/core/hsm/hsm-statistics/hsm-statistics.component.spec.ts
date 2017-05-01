import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsmStatisticsComponent } from './hsm-statistics.component';

describe('HsmStatisticsComponent', () => {
  let component: HsmStatisticsComponent;
  let fixture: ComponentFixture<HsmStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsmStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsmStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
