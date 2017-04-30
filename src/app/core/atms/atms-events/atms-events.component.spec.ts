import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsEventsComponent } from './atms-events.component';

describe('AtmsEventsComponent', () => {
  let component: AtmsEventsComponent;
  let fixture: ComponentFixture<AtmsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
