/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import { TLineChartSeries, TLineChartMouseEvent } from './line-chart';
import * as d3 from 'd3';

@Component({
  selector: 'mui-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent implements OnInit {
  /*Input params */
  @Input() label = '';
  @Input() colors: string[] = [];
  @Input() series: TLineChartSeries[][] = [];
  @Input() showGrid = false;
  @Input() width = 800;
  @Input() height = 400;

  /*Output events */
  @Output() onPointMouseover: EventEmitter<TLineChartMouseEvent> =
    new EventEmitter();
  @Output() onPointMouseout: EventEmitter<TLineChartMouseEvent> =
    new EventEmitter();

  constructor(private elRef: ElementRef) {}

  margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private _defaultColors: string[] = [
    '#1F6F8B',
    '#E6D5B8',
    '#F05454',
    '#AF2D2D',
    '#FFD5CD',
  ];

  ngOnInit(): void {
    this.setChart();
  }

  setChart(): void {
    const width = this.width - this.margin.left - this.margin.right;
    const height = this.height - this.margin.top - this.margin.bottom;

    const svg = d3
      .select(
        this.elRef.nativeElement.querySelector('.mui__line-chart-content')
      )
      .append('svg')
      .attr('width', width + this.margin.left + this.margin.right)
      .attr('height', height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    const x = d3
      .scalePoint()
      .range([0, width])
      .domain(this.series.flat().map(d => d.label));

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.series.flat(), d => d.value)!])
      .range([height, 0]);

    const line = d3
      .line<TLineChartSeries>()
      .x(d => x(d.label)!)
      .y(d => y(d.value));

    // Добавление осей
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .attr('color', '#999');
    svg.append('g').call(d3.axisLeft(y)).attr('color', '#999');

    //Добавляем сетку
    if (this.showGrid) {
      this.addGrid(svg, y, width);
    }

    // Создание и добавление линий и точек для каждой серии
    this.series.forEach((seriesData, index) => {
      const g = svg.append('g').attr('class', `series-${index}`);

      // Добавление линии
      g.append('path')
        .datum(seriesData)
        .attr('fill', 'none')
        .attr('stroke', this.color(index)) // функция для выбора цвета для серии
        .attr('stroke-width', 2)
        .attr('d', line);

      // Добавление точек
      g.selectAll('.dot')
        .data(seriesData)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', d => x(d.label) ?? 0)
        .attr('cy', d => y(d.value))
        .attr('r', 4)
        .attr('fill', this.color(index))
        .attr('line-index', index)
        .on('mouseover', (event, data) =>
          this.onMouseover(event, data, svg, x, y)
        )
        .on('mouseout', (event, data) => this.onMouseout(event, data, svg));
    });
  }

  onMouseover(
    event: Event,
    data: TLineChartSeries,
    svg: d3.Selection<SVGGElement, unknown, null, undefined>,
    x: d3.ScalePoint<string>,
    y: d3.ScaleLinear<number, number, never>
  ): void {
    const index = +(
      (event.target as HTMLElement).getAttribute('line-index') || 0
    );
    d3.select(event.target as HTMLElement)
      .transition()
      .duration(100)
      .attr('r', 8);
    // Добавление подсказки
    svg
      .append('text')
      .attr('id', 'tooltip')
      .attr('x', x(data.label)!)
      .attr('y', y(data.value) - 10)
      .attr('text-anchor', 'middle')
      .text(data.value)
      .attr('fill', (d3.color(this.color(index)) as any).darker(2))
      .style('font-size', '16px')
      .style('font-weight', 'bold');

    this.onPointMouseover.emit({ event, data });
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

  onMouseout(
    event: Event,
    data: TLineChartSeries,
    svg: d3.Selection<SVGGElement, unknown, null, undefined>
  ): void {
    d3.select(event.target as HTMLElement)
      .transition()
      .duration(100)
      .attr('r', 4);
    // Удаление подсказки
    svg.select('#tooltip').remove();

    this.onPointMouseout.emit({ event, data });
  }

  color(index: number): string {
    return (
      d3.color(this.colors[index] || this._defaultColors[index])?.toString() ||
      'black'
    );
  }
}
