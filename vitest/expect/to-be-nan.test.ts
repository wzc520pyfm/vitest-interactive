import { expect, test } from 'vitest'

let i = 0

function getApplesCount() {
  i++
  return i > 1 ? Number.NaN : i
}

test('getApplesCount has some unusual side effects...', () => {
  expect(getApplesCount()).not.toBeNaN()
  expect(getApplesCount()).toBeNaN()
})