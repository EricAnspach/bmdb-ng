import { TestBed } from '@angular/core/testing';

import { MoviegenreService } from './moviegenre.service';

describe('MoviegenreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviegenreService = TestBed.get(MoviegenreService);
    expect(service).toBeTruthy();
  });
});
