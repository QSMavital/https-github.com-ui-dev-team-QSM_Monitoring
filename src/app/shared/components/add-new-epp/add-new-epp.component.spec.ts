import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEppComponent } from './add-new-epp.component';

describe('AddNewEppComponent', () => {
  let component: AddNewEppComponent;
  let fixture: ComponentFixture<AddNewEppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
