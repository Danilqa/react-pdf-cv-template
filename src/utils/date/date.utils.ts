import * as chrono from 'chrono-node';

export function getDateRange(startDate: string, endDate?: string): string {
  const start = chrono.parseDate(startDate);
  const end = endDate ? chrono.parseDate(endDate) : new Date();

  if (!start || !end) {
    throw new Error('Invalid Date');
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const resultParts: string[] = [];
  if (years > 0) {
    resultParts.push(`${years} yrs.`);
  }
  if (months > 0 || years === 0) {
    resultParts.push(`${months} mos.`);
  }

  return resultParts.join(' ');
}
