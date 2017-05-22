import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgTimeComponent } from './ag-time.component';

describe('AgTimeComponent', () => {
  let component: AgTimeComponent;
  let fixture: ComponentFixture<AgTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
