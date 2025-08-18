// saveScore.test.js
import { describe, it, vi, expect, beforeEach } from 'vitest';

// in-memory store
const savedData = {};

// saveProgress method
const mockSaveProgress = vi.fn(({ planet, level, score, timestamp }) => {
  if (!savedData[planet]) savedData[planet] = {};
  savedData[planet][`level${level}`] = { score, timestamp };
});

// Your mocked saveScore function
const saveScore = async ({ planet, level, score }) => {
  const timestamp = new Date().toISOString();
  await mockSaveProgress({ planet, level, score, timestamp });
};

// reset store before each test
beforeEach(() => {
  for (const key in savedData) delete savedData[key];
  mockSaveProgress.mockClear();
});

describe('saveScore', () => {
  it('completes a single level', async () => {
    await saveScore({ planet: 'Alpha-Literacy', level: 1, score: 690 });

    expect(savedData['Alpha-Literacy']['level1'].score).toBe(690);

    console.log('✅ Single level test result:', savedData);
  });

  it('completes a full set (5 levels)', async () => {
    for (let i = 1; i <= 5; i++) {
      await saveScore({ planet: 'Arith', level: i, score: 700 + i });
    }

    expect(Object.keys(savedData['Arith']).length).toBe(5);
    expect(savedData['Arith']['level5'].score).toBe(705);

    console.log('✅ Full set test result:', savedData);
  });
});
