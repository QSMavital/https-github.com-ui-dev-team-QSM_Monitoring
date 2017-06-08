import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgNumberComponent } from './ag-number.component';

describe('AgNumberComponent', () => {
  let component: AgNumberComponent;
  let fixture: ComponentFixture<AgNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
