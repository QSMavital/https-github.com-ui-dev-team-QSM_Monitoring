import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmSettingsComponent } from './atm-settings.component';

describe('AtmSettingsComponent', () => {
  let component: AtmSettingsComponent;
  let fixture: ComponentFixture<AtmSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
