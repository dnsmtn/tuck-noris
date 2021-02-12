import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from './_container'

import { PublicLayout } from '_layouts/public'
import { Home } from 'components/home'
import { Likes } from 'components/likes'
import { Settings } from 'components/settings'

export const App = () => {
  return (
    <Container>
      <Router basename={'/tuck-noris'}>
        <Switch>
          <PublicLayout>
            <Route path='/' exact={true} component={Home} />
            <Route path='/likes' exact={true} component={Likes} />
            <Route path='/settings' exact={true} component={Settings} />
          </PublicLayout>
        </Switch>
      </Router>
    </Container>
  )
}
