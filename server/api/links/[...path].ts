interface Shortcut {
  from: string
  to: string
}

const shortcuts: Shortcut[] = [
  { from: 'me', to: 'https://redme.cc' },
  { from: 'blog', to: 'https://redme.cc' },
  { from: 'gh', to: 'https://github.com/401U' },
  { from: 'github', to: 'https://github.com/401U' },
  { from: 'bilibili', to: 'https://space.bilibili.com/54438788' },
  { from: 'live', to: 'https://live.bilibili.com/22744945' },
  { from: 'afdian', to: 'https://afdian.net/a/401Unauthorized' },
  { from: 'khl', to: 'https://kook.top/tuIrWm' },
  { from: 'kook', to: 'https://kook.top/tuIrWm' },
  { from: 'nas', to: 'https://nas.north-82.top:5001/' },
  { from: 'share/inbox', to: 'https://nas.north-82.top:5001/sharing/ZnJElCPdp' },
  { from: 'share/public', to: 'https://nas.north-82.top:5001/d/s/qCjP2d1GV0DnihoEg6USliE0wq2W8a0o/5CPXQszo12K3hAnKslcyM87heAoNMp1_-sbEgNdi7zgk' },
  { from: 'share/print', to: 'https://nas.north-82.top:5001/d/s/qCjPKz7wWkfsozOTMfDzTJRm2RRNc8Sf/RcssYPmp2_vVeD9QikgtOFfpVFvsifxr-urEgyfC7zgk' },
  { from: 'khl/fas', to: 'https://kook.top/vqJlGd' },
  { from: 'kook/fas', to: 'https://kook.top/vqJlGd' },
  { from: 'feishu', to: 'https://redme-cc.feishu.cn/invite/member/A4UMGYN_ag5Yuxcs' },
]

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
