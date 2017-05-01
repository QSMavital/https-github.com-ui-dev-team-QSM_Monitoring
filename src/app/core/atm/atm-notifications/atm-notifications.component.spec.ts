import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmNotificationsComponent } from './atm-notifications.component';

describe('AtmNotificationsComponent', () => {
  let component: AtmNotificationsComponent;
  let fixture: ComponentFixture<AtmNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
