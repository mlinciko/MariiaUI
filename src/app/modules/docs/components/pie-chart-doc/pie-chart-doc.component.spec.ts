import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartDocComponent } from './pie-chart-doc.component';

describe('PieChartDocComponent', () => {
  let component: PieChartDocComponent;
  let fixture: ComponentFixture<PieChartDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartDocComponent]
    });
    fixture = TestBed.createComponent(PieChartDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
