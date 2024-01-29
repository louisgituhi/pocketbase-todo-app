import './App.css'
import AddTask from './add-task'
import TaskHome from './home'
import NavigationBar from './navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <NavigationBar />

      <Switch>
        <Route exact path="/">
          <TaskHome />  
        </Route>

        <Route path="/add-task">
          <AddTask />
        </Route>

      </Switch>

    </Router>
    </>
  )
}

export default App
