import { expect, test } from 'vitest'

class Stocks {
  #stocks: Map<string, { balance: number }> = new Map()

  sync(name: string) {
    this.#stocks.set(name, {balance: 0})
  }

  getInfo(name: string) {
    return this.#stocks.get(name)
  }
}

const stocks = new Stocks()

test('if we know Bill stock, sell apples to him', () => {
  stocks.sync('Bill')
  expect(stocks.getInfo('Bill')).toBeTruthy()
})