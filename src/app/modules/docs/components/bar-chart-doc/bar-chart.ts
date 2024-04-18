export const BAR_CHART_TITLE = 'BarChart';
export const BAR_CHART_DESCRIPTION =
  'UI component that allows to display data in the form of bars, where each bar represents a different category or variable, and the height of the bar is proportional to the value of that category.';
export const BAR_CHART_CODE = `/*Input params */
@Input() label = '';
@Input() barColor = '#F05454';
@Input() series: TBarChartSeries[] = [];
@Input() showGrid = false;
@Input() width = 800;
@Input() height = 400;

/*Output events */
@Output() onBarMouseover: EventEmitter<TBarChartMouseEvent> = new EventEmitter();
@Output() onBarMouseout: EventEmitter<TBarChartMouseEvent> = new EventEmitter();`;
