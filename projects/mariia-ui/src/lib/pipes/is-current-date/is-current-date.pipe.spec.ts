import { IsCurrentDatePipe } from './is-current-date.pipe';

describe('IsCurrentDatePipe', () => {
  it('create an instance', () => {
    const pipe = new IsCurrentDatePipe();
    expect(pipe).toBeTruthy();
  });
});
