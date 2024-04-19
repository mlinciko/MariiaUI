export type TMenuItem = {
  route: string;
  title: string;
  isActive: boolean;
  level: number;
  isExpanded?: boolean;
  children?: TMenuItem[];
};
