import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsmStatusComponent } from './hsm-status.component';

describe('HsmStatusComponent', () => {
  let component: HsmStatusComponent;
  let fixture: ComponentFixture<HsmStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsmStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsmStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
