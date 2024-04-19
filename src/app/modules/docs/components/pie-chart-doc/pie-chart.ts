export const PIE_CHART_TITLE = 'PieChart';
export const PIE_CHART_CODE = `/*Input params */
@Input() label = '';
@Input() colors!: string[];
@Input() series: TPieChartSeries[] = [];
@Input() width = 400;
@Input() height = 400;

/*Output events */
@Output() onSectorMouseover: EventEmitter<TPieChartMouseEvent> = new EventEmitter();
@Output() onSectorMouseout: EventEmitter<TPieChartMouseEvent> = new EventEmitter();`;
