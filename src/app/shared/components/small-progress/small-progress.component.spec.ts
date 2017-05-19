import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProgressComponent } from './small-progress.component';

describe('SmallProgressComponent', () => {
  let component: SmallProgressComponent;
  let fixture: ComponentFixture<SmallProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
