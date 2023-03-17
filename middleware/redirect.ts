export default defineNuxtRouteMiddleware(async (to, _) => {
  if (process.server)
    return
  if (to.path.startsWith('/link_miss'))
    return

  const data = await $fetch(`/api/links/${to.path}`)
  if (data.code === 302)
    return navigateTo(data.url, { external: true })
  else
    return navigateTo(`http://localhost:3000/link_miss?code=${data.code}&url=${data.url}`, { external: true })
})
