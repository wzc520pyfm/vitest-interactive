import { describe, expect, test } from 'vitest'

describe('toBe', () => {
  const stock = {
    type: 'apples',
    count: 13,
  }

  test('stock has 13 apples', () => {
    expect(stock.type).toBe('apples')
    expect(stock.count).toBe(13)
  })

  test('stocks are the same', () => {
    const refStock = stock // same reference

    expect(stock).toBe(refStock)
  })
})
