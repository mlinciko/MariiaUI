import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartDocComponent } from './bar-chart-doc.component';

describe('BarChartDocComponent', () => {
  let component: BarChartDocComponent;
  let fixture: ComponentFixture<BarChartDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartDocComponent]
    });
    fixture = TestBed.createComponent(BarChartDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
