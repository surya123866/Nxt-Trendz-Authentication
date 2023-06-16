import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/LoginForm'
import Home from './components/Home'
import NoteFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route component={NoteFound} />
    </Switch>
  </BrowserRouter>
)

export default App
