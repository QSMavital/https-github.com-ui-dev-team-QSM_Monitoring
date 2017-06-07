import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDirectiveComponent } from './ag-directive.component';

describe('AgDirectiveComponent', () => {
  let component: AgDirectiveComponent;
  let fixture: ComponentFixture<AgDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
