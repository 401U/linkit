import { describe, expect, it } from 'vitest'

describe('api/url', () => {
  it('should return correct code', async () => {
    const { data } = await useFetch('/api/url/abc')
    expect(data).toMatchInlineSnapshot(`
      RefImpl {
        "__v_isRef": true,
        "__v_isShallow": true,
        "_rawValue": undefined,
        "_value": undefined,
        "dep": undefined,
      }
    `)
  })
})
