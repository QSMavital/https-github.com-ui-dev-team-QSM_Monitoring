import { TestBed, inject } from '@angular/core/testing';

import { GridDefsService } from './grid-defs.service';

describe('GridDefsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridDefsService]
    });
  });

  it('should ...', inject([GridDefsService], (service: GridDefsService) => {
    expect(service).toBeTruthy();
  }));
});
