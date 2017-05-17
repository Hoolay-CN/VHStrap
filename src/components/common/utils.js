let scrollBarWidth = 0

export const getScrollBarWidth = () => {
  if (scrollBarWidth !== 0 || document.documentElement.scrollHeight <= document.documentElement.clientHeight) { return scrollBarWidth }

  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode.removeChild(outer)

  return widthNoScroll - widthWithScroll
}

/**
 * Mix properties into target object.
 */
export const mixin = (to, _from) => {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}
