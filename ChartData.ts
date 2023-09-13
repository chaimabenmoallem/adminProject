export class Dataset {
  label!: string;
  borderColor!: string[];
  data!: number[];
  borderWidth!: number;
  backgroundColor!: string[];
}

export class ChartData {
  id!: string;
  type!: string;
  labels!: string[];
  datasets!: Dataset[];
}
