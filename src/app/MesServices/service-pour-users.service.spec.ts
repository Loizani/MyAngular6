import { TestBed } from '@angular/core/testing';

import { ServicePourUsers } from './service-pour-users.service';

describe('ServicePourUsers', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePourUsers = TestBed.get(ServicePourUsers);
    expect(service).toBeTruthy();
  });
});
