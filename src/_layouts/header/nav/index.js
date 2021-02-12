import { useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { AppContext } from '_container/context'
import { useLikes } from 'components/retention/uselikes.hook'

import {
  Wrapper,
  Jokes,
  Likes,
  Categories
} from './styles'

export const Nav = () => {
  const location = useLocation()
  const [{ likes }, dispatch] = useContext(AppContext)
  const { read } = useLikes()

  useEffect(() => {
    if (likes.isFetched)
      return () => {}

    const lsLikes = read()
    const lsLikesList = Object.keys(lsLikes).map(key => lsLikes[key])
    dispatch({ action: 'likes_load', payload: lsLikesList })
  }, [])

  return (
    <Wrapper active={location.pathname}>
      <Jokes>
        <Link to={'/'} />
      </Jokes>
      <Likes amount={likes.list.length}>
        <Link to={'likes'} />
      </Likes>
      <Categories>
        <Link to={'settings'} />
      </Categories>
    </Wrapper>
  )
}