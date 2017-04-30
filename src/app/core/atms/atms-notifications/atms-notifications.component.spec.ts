import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsNotificationsComponent } from './atms-notifications.component';

describe('AtmsNotificationsComponent', () => {
  let component: AtmsNotificationsComponent;
  let fixture: ComponentFixture<AtmsNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
