import { PieArcDatum } from 'd3';

export type TPieChartSeries = {
  percent: number;
  label: string;
};

export type TPieChartMouseEvent = {
  event: Event;
  data: PieArcDatum<any>;
};
