const NAMESPACE = 'cn_likes'

export const useLikes = () => {
  const _get = () => JSON.parse(localStorage.getItem(NAMESPACE))
  const _set = (value = {}) => localStorage.setItem(NAMESPACE, JSON.stringify(value))
  
  if(!_get()) _set()

  const read = _get
  
  const like = joke => {
    const current = _get()

    if (current[joke.id])
      throw new Error('Joke already liked')
    
    _set({
      ...current,
      [joke.id]: {
        ...joke,
        favTime: Date.now()
      }
    })
  }

  const dislike = joke => {
    const current = _get()
    
    if (!current[joke.id])
      throw new Error('Joke not yet liked')

    delete current[joke.id]
    _set(current)
  }

  return { read, like, dislike }
}