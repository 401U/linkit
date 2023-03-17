import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('links api test', async () => {
  await setup({})

  it('should return 302', async () => {
    expect(await $fetch('/api/links/test')).toMatchInlineSnapshot(`
      {
        "code": 302,
        "url": "http://google.com/search?q=test",
      }
    `)
  })

  it('should return 500', async () => {
    expect(await $fetch('/api/links/abc')).toMatchInlineSnapshot(`
      {
        "code": 500,
        "url": "",
      }
    `)
  })
})
