export default defineEventHandler((event) => {
  if (event.context.params?.path === 'test') {
    return {
      code: 302,
      url: `http://google.com/search?q=${event.context.params?.path}`,
    }
  }
  return {
    code: 500,
    url: event.context.params?.path,
  }
})
