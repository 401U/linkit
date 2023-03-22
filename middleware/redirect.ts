interface R {
  code: number
  url: string
}

export default defineNuxtRouteMiddleware(async (to, _) => {
  if (process.server)
    return
  if (to.path.startsWith('/redirect_error'))
    return

  const path = to.path.startsWith('/') ? to.path.slice(1) : to.path
  const data: R = await $fetch(`/api/links/${path}`)
  if (data.code === 302)
    return navigateTo(data.url, { external: true })
  else
    return navigateTo(`/redirect_error?code=${data.code}&url=${data.url}`)
})
