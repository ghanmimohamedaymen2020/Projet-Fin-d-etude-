import { TestBed } from '@angular/core/testing';

import { ListeDetailleeTravailFinJourneeModelService } from './liste-detaillee-travail-fin-journee-model.service';

describe('ListeDetailleeTravailFinJourneeModelService', () => {
  let service: ListeDetailleeTravailFinJourneeModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeDetailleeTravailFinJourneeModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
