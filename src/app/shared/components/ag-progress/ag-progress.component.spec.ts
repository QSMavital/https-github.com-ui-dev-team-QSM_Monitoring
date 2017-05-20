import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgProgressComponent } from './ag-progress.component';

describe('AgProgressComponent', () => {
  let component: AgProgressComponent;
  let fixture: ComponentFixture<AgProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
