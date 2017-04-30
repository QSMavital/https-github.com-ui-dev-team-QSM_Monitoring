import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsStatusComponent } from './atms-status.component';

describe('AtmsStatusComponent', () => {
  let component: AtmsStatusComponent;
  let fixture: ComponentFixture<AtmsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
