import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsmTableComponent } from './hsm-table.component';

describe('HsmTableComponent', () => {
  let component: HsmTableComponent;
  let fixture: ComponentFixture<HsmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
