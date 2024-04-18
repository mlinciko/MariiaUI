import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosMenuComponent } from './demos-menu.component';

describe('DemosMenuComponent', () => {
  let component: DemosMenuComponent;
  let fixture: ComponentFixture<DemosMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemosMenuComponent]
    });
    fixture = TestBed.createComponent(DemosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
