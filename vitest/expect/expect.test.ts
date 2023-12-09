import { describe, expect, test } from 'vitest'

describe('expect', () => {
  test('expect can create assertions', () => {
    const input = Math.sqrt(4)
    expect(input).toBe(2) // success
  })

  test('expect.soft can continues running when assertion fails', () => {
    expect.soft(1 +1).toBe(3) // mark the test as fail and continue
    expect(1 + 2).toBe(4) // failed and terminate the test, all previous errors will be output
    expect.soft(1 + 3).toBe(5) // do not run
  })

  test('expect.not can negate the assertion', () => {
    const input = Math.sqrt(16)
    expect(input).not.toBe(2) // success
  })
})
