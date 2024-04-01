export const REQUIRED_ERROR = 'Поле обязательно для заполнения';
export const MIN_ERROR = (min: number) =>
  `Минимальное значение должно быть не менее ${min}`;
export const MAX_ERROR = (max: number) =>
  `Максимальное значение должно быть не более ${max}`;
export const REQUIRED_TRUE_ERROR = 'Требуется подтверждение';
export const EMAIL_ERROR = 'Некорректный email адрес';
export const MIN_LENGTH_ERROR = (minLength: number) =>
  `Минимальная длина должна быть не менее ${minLength} символов`;
export const MAX_LENGTH_ERROR = (maxLength: number) =>
  `Максимальная длина должна быть не более ${maxLength} символов`;
export const PATTERN_ERROR = 'Некорректный формат';
