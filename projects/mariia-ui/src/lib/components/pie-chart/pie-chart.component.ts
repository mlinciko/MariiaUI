/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import * as d3 from 'd3';
import { TPieChartMouseEvent, TPieChartSeries } from './pie-chart';

@Component({
  selector: 'mui-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent implements OnInit {
  /*Input params */
  @Input() label = '';
  @Input() colors!: string[];
  @Input() series: TPieChartSeries[] = [];
  @Input() width = 400;
  @Input() height = 400;

  /*Output events */
  @Output() onSectorMouseover: EventEmitter<TPieChartMouseEvent> =
    new EventEmitter();
  @Output() onSectorMouseout: EventEmitter<TPieChartMouseEvent> =
    new EventEmitter();

  constructor(private elRef: ElementRef) {}

  private _defaultColors: string[] = [
    '#F1F6F9',
    '#1F6F8B',
    '#E6D5B8',
    '#F05454',
    '#AF2D2D',
    '#FFD5CD',
  ];
  chart: d3.Selection<SVGGElement, unknown, null, undefined> | null = null;
  arc: any = null;
  color: any = null;
  pieChartData: d3.PieArcDatum<any>[] = [];

  ngOnInit(): void {
    this.setChart();
    this.setLegend();
  }

  setChart(): void {
    const radius = Math.min(this.width, this.height) / 2;

    const svg = d3
      .select(this.elRef.nativeElement.querySelector('.mui__pie-chart-content'))
      .append('svg')
      .attr('width', '100%')
      .attr('height', this.height);

    this.chart = svg
      .append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);

    this.color = d3
      .scaleOrdinal()
      .domain(this.series.map((d, i) => i.toString()))
      .range(this.colors || this._defaultColors);

    const pie = d3.pie<any>().value(d => d.percent);
    this.pieChartData = pie(this.series);

    this.arc = d3.arc().innerRadius(0).outerRadius(radius);

    this.chart
      .selectAll('path')
      .data(this.pieChartData)
      .enter()
      .append('path')
      .attr('d', this.arc)
      .attr('fill', (d, i) => this.color(i))
      .attr('stroke', 'white')
      .attr('index', (d, i) => i.toString())
      .style('stroke-width', '2px')
      .on('mouseover', (event, data) => this.onMouseover(event, data))
      .on('mouseout', (event, data) => this.onMouseout(event, data));
  }

  setLegend(): void {
    const legend = this.chart
      ?.selectAll('.legend')
      .data(this.pieChartData)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr(
        'transform',
        (d, i) =>
          `translate(-${this.width / 2 - 20}, ${i * 20 - this.height / 2})`
      );

    legend
      ?.append('rect')
      .attr('x', this.width - 18)
      .attr('width', 18)
      .attr('height', 18)
      .attr('rx', 4)
      .style('fill', (d, i) => this.color(i));

    legend
      ?.append('text')
      .attr('x', this.width + 10)
      .attr('y', 8)
      .attr('dy', '.35em')
      .text(d => d.data.label);
  }

  onMouseover(event: Event, data: d3.PieArcDatum<any>): void {
    const target = event.target as HTMLElement;
    const path = target;
    const index = +(target.getAttribute('index') || 0);
    d3.select(path).transition().duration(200).style('opacity', 0.7);

    const rect = d3.selectAll('.legend rect').nodes()[index];
    d3.select(rect).transition().duration(200).style('opacity', 0.7);

    this.chart
      ?.append('text')
      .attr('class', 'percentage-label')
      .attr('transform', `translate(${this.arc.centroid(data)})`)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .style('fill', (d3.color(this.color(index)) as any).darker(2))
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text(`${data.data.percent}%`);

    this.onSectorMouseover.emit({ event, data });
  }

  onMouseout(event: Event, data: d3.PieArcDatum<any>): void {
    const target = event.target as HTMLElement;
    const path = target;
    const index = +(target.getAttribute('index') || 0);
    d3.select(path).transition().duration(200).style('opacity', 1);

    const rect = d3.selectAll('.legend rect').nodes()[index];
    d3.select(rect).transition().duration(200).style('opacity', 1);

    this.chart?.selectAll('.percentage-label').remove();

    this.onSectorMouseout.emit({ event, data });
  }
}
