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
import { TBarChartMouseEvent, TBarChartSeries } from './bar-chart';

@Component({
  selector: 'mui-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements OnInit {
  /*Input params */
  @Input() label = '';
  @Input() barColor = '#F05454';
  @Input() series: TBarChartSeries[] = [];
  @Input() showGrid = false;
  @Input() width = 800;
  @Input() height = 400;

  /*Output events */
  @Output() onBarMouseover: EventEmitter<TBarChartMouseEvent> =
    new EventEmitter();
  @Output() onBarMouseout: EventEmitter<TBarChartMouseEvent> =
    new EventEmitter();

  constructor(private elRef: ElementRef) {}

  margin = { top: 20, right: 20, bottom: 30, left: 50 };

  ngOnInit(): void {
    this.setChart();
  }

  setChart(): void {
    const width = this.width - this.margin.left - this.margin.right;
    const height = this.height - this.margin.top - this.margin.bottom;
    const svg = d3
      .select(this.elRef.nativeElement.querySelector('.mui__bar-chart-content'))
      .append('svg')
      .attr('width', width + this.margin.left + this.margin.right)
      .attr('height', height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );

    const x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(this.series.map(d => d.label));
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.series, d => d.value ?? 0) as number])
      .range([height, 0]);

    // Добавление осей
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
      .attr('color', '#999');
    svg.append('g').call(d3.axisLeft(y)).attr('color', '#999');

    //Добавляем сетку
    if (this.showGrid) {
      this.addGrid(svg, y, width);
    }

    svg
      .selectAll('.bar')
      .data(this.series)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.label) ?? 0)
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('fill', this.barColor)
      .on('mouseover', (event, data) =>
        this.onMouseover(event, data, svg, x, y, height)
      )
      .on('mouseout', (event, data) => this.onMouseout(event, data, svg));
  }

  addGrid(
    svg: d3.Selection<SVGGElement, unknown, null, undefined>,
    y: d3.ScaleLinear<number, number, never>,
    width: number
  ): void {
    svg
      .append('g')
      .attr('class', 'grid')
      .call(
        d3
          .axisLeft(y)
          .tickSize(-width)
          .tickFormat(() => '')
      )
      .selectAll('line')
      .style('stroke', '#999') // Установите предпочитаемый цвет для линий сетки
      .style('stroke-opacity', 0.7) // Установите желаемую прозрачность для линий сетки
      .style('shape-rendering', 'crispEdges');

    svg.selectAll('.grid path').style('stroke-width', 0);
  }

  onMouseover(
    event: Event,
    data: TBarChartSeries,
    svg: d3.Selection<SVGGElement, unknown, null, undefined>,
    x: d3.ScaleBand<string>,
    y: d3.ScaleLinear<number, number, never>,
    height: number
  ): void {
    const target = event.target as HTMLElement;
    const path = target;
    d3.select(path).attr(
      'fill',
      d3.color(this.barColor)?.brighter(1).toString() || this.barColor
    );

    const textY = y(data.value) + (height - (y(data.value) ?? 0)) / 2 + 5;

    svg
      .append('text')
      .attr('class', 'value')
      .attr('x', x(data.label)! + x.bandwidth() / 2)
      .attr('y', textY)
      .attr('text-anchor', 'middle')
      .attr(
        'fill',
        d3.color(this.barColor)?.darker(2).toString() || this.barColor
      )
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text(data.value);

    this.onBarMouseover.emit({ event, data });
  }

  onMouseout(
    event: Event,
    data: TBarChartSeries,
    svg: d3.Selection<SVGGElement, unknown, null, undefined>
  ): void {
    const target = event.target as HTMLElement;
    const path = target;
    d3.select(path).attr(
      'fill',
      d3.color(this.barColor)?.toString() || this.barColor
    );

    svg.selectAll('.value').remove();

    this.onBarMouseout.emit({ event, data });
  }
}
