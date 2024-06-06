import { TestBed } from '@angular/core/testing';

import { UserPreferencesServiceService } from './user-preferences-service.service';

describe('UserPreferencesServiceService', () => {
  let service: UserPreferencesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPreferencesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
