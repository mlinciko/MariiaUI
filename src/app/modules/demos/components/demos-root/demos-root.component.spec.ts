import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosRootComponent } from './demos-root.component';

describe('DemosRootComponent', () => {
  let component: DemosRootComponent;
  let fixture: ComponentFixture<DemosRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemosRootComponent],
    });
    fixture = TestBed.createComponent(DemosRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
