import { TestBed, inject } from '@angular/core/testing';

import {CanActivateRoute} from './can-activate.service';

describe('CanActivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateRoute]
    });
  });

  it('should ...', inject([CanActivateRoute], (service: CanActivateRoute) => {
    expect(service).toBeTruthy();
  }));
});
