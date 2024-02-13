import { describe, it, expect, vi } from 'vitest';
import { getDateRange } from './date.utils.ts';

describe(getDateRange.name, () => {
  it('should return the correct range when the end date is omitted', () => {
    const mockCurrentDate = new Date('10.01.2024');
    vi.useFakeTimers().setSystemTime(mockCurrentDate);

    expect(getDateRange('Feb 2022')).toBe('2 yrs. 8 mos.');
    vi.useRealTimers();
  });

  it('should return the correct range when both start and end dates are provided', () => {
    expect(getDateRange('Jan 2020', 'June 2022')).toBe('2 yrs. 5 mos.');
  });

  it('should return the correct range for a multi-year period', () => {
    expect(getDateRange('Mar 2018', 'July 2022')).toBe('4 yrs. 4 mos.');
  });

  it('should return the correct range within the same year', () => {
    expect(getDateRange('Feb 2022', 'Oct 2022')).toBe('8 mos.');
  });

  it('should handle the edge case of the same month and year', () => {
    expect(getDateRange('May 2022', 'May 2022')).toBe('0 mos.');
  });

  it('should handle invalid date inputs gracefully', () => {
    expect(() => getDateRange('invalid-date', 'also-invalid')).toThrow('Invalid Date');
  });
});
