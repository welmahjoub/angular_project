import { TestBed } from '@angular/core/testing';

import { APIPokemonServiceService } from './apipokemon-service.service';

describe('APIPokemonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIPokemonServiceService = TestBed.get(APIPokemonServiceService);
    expect(service).toBeTruthy();
  });
});
