import { useEffect, useContext } from 'react'
import { AppContext } from '_container/context'

import { getJoke } from 'services/jokes.service'

import { Wrapper } from './home.styles'
import { JokeCard } from 'components/writing/joke-card'
import { JokeOptions } from 'components/retention/joke-options'
import { Loading } from 'components/commons/loading'


export const Home = () => {
  const [{ joke, settings }, dispatch ] = useContext(AppContext)

  const fetchJoke = async category => {
    dispatch({ action: 'joke_get'})
    const payload = await getJoke(category)
    dispatch({ action: 'joke_set', payload})
  }

  useEffect(() => {
    fetchJoke(settings.category)
    return () => dispatch('joke_clear')
  }, [])

  return (
    <Wrapper>
      {joke.isFetching && <Loading />}
      {!joke.isFetching && joke.data && (
        <>
          <JokeCard {...joke.data} />
          <JokeOptions fetchJoke={fetchJoke} />
        </>
      )}
    </Wrapper>
  )
}