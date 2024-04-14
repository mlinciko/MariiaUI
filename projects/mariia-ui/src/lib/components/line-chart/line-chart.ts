export type TLineChartSeries = {
  value: number;
  label: string;
};

export type TLineChartMouseEvent = {
  event: Event;
  data: TLineChartSeries;
};
