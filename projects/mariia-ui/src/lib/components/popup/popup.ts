import { ButtonTypeEnum } from '../button/button';

export type TPopupButton = {
  label: string;
  type: ButtonTypeEnum;
  disabled?: boolean;
  callback: (...params: any[]) => any;
};
