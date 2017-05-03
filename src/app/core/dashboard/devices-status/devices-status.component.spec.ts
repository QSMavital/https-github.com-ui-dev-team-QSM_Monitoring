import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesStatusComponent } from './devices-status.component';

describe('DevicesStatusComponent', () => {
  let component: DevicesStatusComponent;
  let fixture: ComponentFixture<DevicesStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
