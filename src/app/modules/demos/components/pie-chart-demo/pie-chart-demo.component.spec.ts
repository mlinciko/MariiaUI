import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartDemoComponent } from './pie-chart-demo.component';

describe('PieChartDemoComponent', () => {
  let component: PieChartDemoComponent;
  let fixture: ComponentFixture<PieChartDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartDemoComponent]
    });
    fixture = TestBed.createComponent(PieChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
