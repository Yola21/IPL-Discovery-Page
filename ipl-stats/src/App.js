import './App.css';
import Banner from './Banner';
import Players from './Players';
import Teams from './Teams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/players">
            <Header />
            <Players />
          </Route>
          <Route path="/">
            <Header />
            <Banner />
            <Teams />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
