import { useContext } from 'react'
import { AppContext } from '_container/context'

import { useLikes } from './uselikes.hook'

import {
  Card,
  Joke,
  Dislike
} from './joke-card.styles'

export const JokeCard = ({ joke, visibility, index }) => {
  const [{}, dispatch] = useContext(AppContext)
  const { dislike } = useLikes()

  const unlikeJoke = () => {
    dislike(joke)
    dispatch({ action: 'likes_remove', payload: joke})
  }

  return (
    <Card isOpen={visibility.get === index} onClick={() => visibility.set(index)}>
      <Joke>{joke.value}</Joke>
      <Dislike onClick={() => unlikeJoke(joke)}>unlike</Dislike>
    </Card>
  )
}