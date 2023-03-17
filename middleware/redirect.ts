export default defineNuxtRouteMiddleware(async (to, _) => {
  if (process.server)
    return
  if (to.path.startsWith('/redirect_error'))
    return

  const data = await $fetch(`/api/links/${to.path}`)
  if (data.code === 302)
    return navigateTo(data.url, { external: true })
  else
    return navigateTo(`/redirect_error?code=${data.code}&url=${data.url}`)
})
