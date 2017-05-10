import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsNotificationsFiltersComponent } from './atms-notifications-filters.component';

describe('AtmsNotificationsFiltersComponent', () => {
  let component: AtmsNotificationsFiltersComponent;
  let fixture: ComponentFixture<AtmsNotificationsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsNotificationsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsNotificationsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
