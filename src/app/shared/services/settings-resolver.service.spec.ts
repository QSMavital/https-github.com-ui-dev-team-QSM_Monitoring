import { TestBed, inject } from '@angular/core/testing';

import { SettingsResolverService } from './settings-resolver.service';

describe('SettingsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsResolverService]
    });
  });

  it('should ...', inject([SettingsResolverService], (service: SettingsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
