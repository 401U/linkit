interface R {
  code: number
  url: string
}

export default defineNuxtRouteMiddleware(async (to, _) => {
  const path = to.path.startsWith('/') ? to.path.slice(1) : to.path
  const data: R = await $fetch(`/api/links/${path}`)
  if (data.code === 302)
    return navigateTo(data.url, { external: true })
})
