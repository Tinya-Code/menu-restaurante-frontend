import { FechaPipe } from './fecha.pipe';

describe('FechaPipe', () => {
  let pipe: FechaPipe;
  const mockDate = new Date('2024-03-26T15:30:00');

  beforeEach(() => {
    pipe = new FechaPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format date in medium (default) format', () => {
    const result = pipe.transform(mockDate);
    expect(result).toContain('26');
    expect(result).toContain('2024');
  });

  it('should format date in short format', () => {
    const result = pipe.transform(mockDate, 'short');
    expect(result).toMatch(/\d{2}\/\d{2}\/\d{2}/);
  });

  it('should format date in dateTime format', () => {
    const result = pipe.transform(mockDate, 'dateTime').toLowerCase();
    expect(result).toContain('3:30');
    // Verifica que contenga algún indicador de meridiano (am, pm, a. m., p. m.)
    expect(result).toMatch(/(am|pm|m\.)/);
  });

  it('should return empty string for invalid dates', () => {
    expect(pipe.transform('invalid-date')).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});
