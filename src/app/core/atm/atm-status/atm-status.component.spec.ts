import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmStatusComponent } from './atm-status.component';

describe('AtmStatusComponent', () => {
  let component: AtmStatusComponent;
  let fixture: ComponentFixture<AtmStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
