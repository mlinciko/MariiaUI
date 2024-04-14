export type TBarChartSeries = {
  value: number;
  label: string;
};

export type TBarChartMouseEvent = {
  event: Event;
  data: TBarChartSeries;
};
