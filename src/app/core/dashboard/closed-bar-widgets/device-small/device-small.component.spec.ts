import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesSmallComponent } from './device-small.component';

describe('DeviceSmallComponent', () => {
  let component: DevicesSmallComponent;
  let fixture: ComponentFixture<DevicesSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
