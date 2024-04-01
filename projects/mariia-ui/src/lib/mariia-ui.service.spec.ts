import { TestBed } from '@angular/core/testing';

import { MariiaUiService } from './mariia-ui.service';

describe('MariiaUiService', () => {
  let service: MariiaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MariiaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
