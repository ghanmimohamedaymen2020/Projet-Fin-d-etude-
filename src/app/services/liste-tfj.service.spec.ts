import { TestBed } from '@angular/core/testing';

import { ListeTFJService } from './liste-tfj.service';

describe('ListeTFJService', () => {
  let service: ListeTFJService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeTFJService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
