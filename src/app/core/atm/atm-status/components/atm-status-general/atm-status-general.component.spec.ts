import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmStatusGeneralComponent } from './atm-status-general.component';

describe('AtmStatusGeneralComponent', () => {
  let component: AtmStatusGeneralComponent;
  let fixture: ComponentFixture<AtmStatusGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmStatusGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmStatusGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
