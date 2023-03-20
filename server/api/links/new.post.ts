export default defineEventHandler(async (event) => {
  interface Body {
    url: string
  }
  const body: Body = await readBody(event)
  if (!body.url.match(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/)) {
    return {
      code: 500,
      path: 'Not supported',
    }
  }
  return {
    code: 500,
    path: 'Invalid URL',
  }
})
