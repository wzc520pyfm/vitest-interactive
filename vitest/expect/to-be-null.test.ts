import { expect, test } from 'vitest'

function apples() {
  return null
}

test('we don\'t have apples', () => {
  expect(apples()).toBeNull()
})