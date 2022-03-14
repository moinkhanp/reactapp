import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Dashboard />
          </Route>
          <Route path="getuser/:page">
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
