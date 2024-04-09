import rawShortcuts from '~/data.json'
interface Shortcut {
  from: string
  to: string
}

const shortcuts = rawShortcuts as Shortcut[]

export default defineEventHandler((event) => {
  const path = event.context.params?.path
  if (!path) {
    return {
      code: 404,
      url: 'Not found',
    }
  }
  const shortcut = shortcuts.find(item => item.from === path)
  if (!shortcut) {
    return {
      code: 404,
      url: 'Not found',
    }
  }
  return {
    code: 302,
    url: shortcut.to,
  }
})
