import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSmallComponent } from './online-small.component';

describe('OnlineSmallComponent', () => {
  let component: OnlineSmallComponent;
  let fixture: ComponentFixture<OnlineSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
