import esGlob from '../lib/index.js';
import { readFileSync } from 'fs';

const mixJSON = JSON.parse(
  readFileSync(new URL('./mix.json', import.meta.url))
);

describe('esGlob', () => {
  test('mix', () => {
    for (const row of mixJSON) {
      expect(esGlob(row[0], row[1])).toBe(row[2]);
    }
  });
});