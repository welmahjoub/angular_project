import { TestBed } from '@angular/core/testing';

import { IdPokemonService } from './id-pokemon.service';

describe('IdPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdPokemonService = TestBed.get(IdPokemonService);
    expect(service).toBeTruthy();
  });
});
