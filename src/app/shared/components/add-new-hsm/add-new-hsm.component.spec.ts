import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHsmComponent } from './add-new-hsm.component';

describe('AddNewHsmComponent', () => {
  let component: AddNewHsmComponent;
  let fixture: ComponentFixture<AddNewHsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewHsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
