import { expect, test } from 'vitest'

function getApplesFromStock(stock) {
  if (stock === 'Bill')
    return 13
}

test('mary doesn\'t have a stock', () => {
  expect(getApplesFromStock('Mary')).toBeUndefined()
})