import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartDemoComponent } from './bar-chart-demo.component';

describe('BarChartDemoComponent', () => {
  let component: BarChartDemoComponent;
  let fixture: ComponentFixture<BarChartDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartDemoComponent]
    });
    fixture = TestBed.createComponent(BarChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
