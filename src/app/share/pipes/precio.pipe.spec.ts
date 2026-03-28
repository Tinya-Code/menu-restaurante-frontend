import { PrecioPipe } from './precio.pipe';

describe('PrecioPipe', () => {
  let pipe: PrecioPipe;

  beforeEach(() => {
    pipe = new PrecioPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format numbers to PEN currency correctly', () => {
    // Nota: Intl.NumberFormat puede usar espacios no rompibles (\u00A0)
    const result = pipe.transform(1234.56).replace(/\u00A0/g, ' ');
    expect(result).toMatch(/S/);
    expect(result).toContain('1,234.56');
  });

  it('should handle string numbers', () => {
    const result = pipe.transform('99.90').replace(/\u00A0/g, ' ');
    expect(result).toContain('99.90');
  });

  it('should return empty string for null or undefined', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return empty string for invalid numbers', () => {
    expect(pipe.transform('abc')).toBe('');
  });
});
