export const LINE_CHART_TITLE = 'LineChart';
export const LINE_CHART_CODE = `/*Input params */
@Input() label = '';
@Input() colors: string[] = [];
@Input() series: TLineChartSeries[][] = [];
@Input() showGrid = false;
@Input() width = 800;
@Input() height = 400;

/*Output events */
@Output() onPointMouseover: EventEmitter<TLineChartMouseEvent> = new EventEmitter();
@Output() onPointMouseout: EventEmitter<TLineChartMouseEvent> = new EventEmitter();`;
