import {
  Card,
  Joke
} from './joke-card.styles'

export const JokeCard = ({ value }) => {
  return (
    <Card>
      <Joke>{ value }</Joke>
    </Card>
  )
}