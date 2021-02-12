import { useContext } from 'react'

import { AppContext } from '_container/context'

import {
  Options,
  Option
} from './joke-options.styles'

import { useLikes } from './uselikes.hook'

import iconClose from '_assets/icons/close.svg'
import iconLike from '_assets/icons/like.svg'

export const JokeOptions = ({ fetchJoke }) => {
  const [{ joke, settings }, dispatch ] = useContext(AppContext)
  const { like } = useLikes()

  const likeJoke = () => {
    try {
      like(joke.data)
      dispatch({ action: 'likes_add', payload: joke.data})
    } catch(e) {
      console.log(e)
    } finally {
      fetchJoke(settings.category)
    }
  }

  const dislikeJoke = () => fetchJoke(settings.category)

  return (
    <Options>
      <Option type={'dislike'} onClick={dislikeJoke}><img alt={''} src={iconClose} /></Option>
      <Option type={'like'} onClick={likeJoke}><img alt={''} src={iconLike} /></Option>
    </Options>
  )
}