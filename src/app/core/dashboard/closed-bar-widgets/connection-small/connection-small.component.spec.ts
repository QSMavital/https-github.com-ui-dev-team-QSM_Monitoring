import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionSmallComponent } from './connection-small.component';

describe('ConnectionSmallComponent', () => {
  let component: ConnectionSmallComponent;
  let fixture: ComponentFixture<ConnectionSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
