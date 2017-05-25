import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmStatusKeysComponent } from './atm-status-keys.component';

describe('AtmStatusKeysComponent', () => {
  let component: AtmStatusKeysComponent;
  let fixture: ComponentFixture<AtmStatusKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmStatusKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmStatusKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
