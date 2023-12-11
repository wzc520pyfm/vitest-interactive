import { expect, test } from 'vitest'

class Stocks {
  #stocks: Map<string, { balance: number }> = new Map()
  
  syncStocks(name: string) {
    this.#stocks.set(name, {balance: 0})
  }
  
  stockFailed(name: string) {
    if (this.#stocks.get(name)?.balance) {
      return false
    }
  }
}

const stocks = new Stocks()

test('if Bill stock hasn\'t failed, sell apples to him', () => {
  stocks.syncStocks('Bill')
  expect(stocks.stockFailed('Bill')).toBeFalsy()
})