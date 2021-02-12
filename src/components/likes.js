import { useState, useContext } from 'react'
import { AppContext } from '_container/context'

import { JokeCard } from 'components/retention/joke-card'

import {
  Wrapper,
  Disclaimer
} from './likes.styles'

export const Likes = () => {
  const [{ likes }] = useContext(AppContext)
  const [ visibleJoke, setVisibleJoke ] = useState(0)

  return (
    <Wrapper>
      {!likes.list.length && <Disclaimer>No jokes liked yet</Disclaimer>}
      {!!likes.list.length && (
        <>
          <Disclaimer>Click any joke to read more</Disclaimer>
          {likes.list.map((joke, index) =>
            <JokeCard
              key={joke.id}
              joke={joke}
              visibility={{ get: visibleJoke, set: setVisibleJoke }}
              index={index}
            />
          )}
        </>
      )}
    </Wrapper>
  )
}