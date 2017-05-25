import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmStatusReventActionComponent } from './atm-status-revent-action.component';

describe('AtmStatusReventActionComponent', () => {
  let component: AtmStatusReventActionComponent;
  let fixture: ComponentFixture<AtmStatusReventActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmStatusReventActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmStatusReventActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
