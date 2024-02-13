export function getDateRange(startDate: string, endDate?: string): string {
  const [start, end] = [new Date(startDate), endDate ? new Date(endDate) : new Date()];

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
