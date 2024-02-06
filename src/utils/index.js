import { nextTick } from 'vue'

/**
* @function
* @description Determines whether an element is in the viewport
* @param {HTMLElement} el
* @param {HTMLElement|null} view
* @returns {boolean}
*/
function isVisible(el, view = null)
{
  const elRect = el.getBoundingClientRect()
  const viewRect = view?.getBoundingClientRect()

  return viewRect
    ? elRect.top >= viewRect.top && elRect.bottom <= viewRect.bottom
    : elRect.top >= 0 && elRect.bottom <= window.innerHeight
}

/**
* @function
* @description Gets the parent element for the passed one
* @param {HTMLElement|string} target
* @returns {Promise<HTMLElement|null>}
*/
async function getParentEl(target)
{
  await nextTick()

  if (target instanceof HTMLElement) {
    return target
  }

  return target
    ? document.querySelector(target)
    : null
}

/**
* @function
* @description Creates an observer instance
* @param {object} params
* @returns {IntersectionObserver}
*/
function startObserver(params)
{
  const rootMargin = params.top ? `${params.distance}px 0px 0px 0px` : `0px 0px ${params.distance}px 0px`

  const observer = new IntersectionObserver(
    entries => {
      const entry = entries[0]

      if (entry.isIntersecting) {
        params.emit()
      }
    },
    { root: params.parentEl, rootMargin }
  )

  observer.observe(params.observerNode.value)

  return observer
}

export {
  startObserver,
  getParentEl,
  isVisible
}
