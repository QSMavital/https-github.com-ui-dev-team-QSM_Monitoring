import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmEventsComponent } from './atm-events.component';

describe('AtmEventsComponent', () => {
  let component: AtmEventsComponent;
  let fixture: ComponentFixture<AtmEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
