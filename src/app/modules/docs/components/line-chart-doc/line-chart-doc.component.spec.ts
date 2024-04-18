import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDocComponent } from './line-chart-doc.component';

describe('LineChartDocComponent', () => {
  let component: LineChartDocComponent;
  let fixture: ComponentFixture<LineChartDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartDocComponent]
    });
    fixture = TestBed.createComponent(LineChartDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
