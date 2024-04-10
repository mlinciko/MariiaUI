export type TNotification = {
  message: string;
  duration: number;
  type: NotificationTypeEnum;
};

export enum NotificationTypeEnum {
  Default = 0,
  Success = 1,
  Warning = 2,
  Error = 3,
}
