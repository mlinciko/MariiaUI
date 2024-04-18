export const LINE_CHART_TITLE = 'LineChart';
export const LINE_CHART_DESCRIPTION =
  'UI component is a graphical display of data in the form of a line that connects data points on a graph. Each data point represents the value of a variable in a specific coordinate system';
export const LINE_CHART_CODE = `  /*Input params */
@Input() label = '';
@Input() colors: string[] = [];
@Input() series: TLineChartSeries[][] = [];
@Input() showGrid = false;
@Input() width = 800;
@Input() height = 400;

/*Output events */
@Output() onPointMouseover: EventEmitter<TLineChartMouseEvent> = new EventEmitter();
@Output() onPointMouseout: EventEmitter<TLineChartMouseEvent> = new EventEmitter();`;
