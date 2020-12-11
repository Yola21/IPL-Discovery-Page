import { useEffect } from 'react';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Players from './Players';
import Teams from './Teams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  useEffect(() =>{
    
  },[]);
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/players">
            <Navbar />
            <Players />
          </Route>
          <Route path="/">
            <Navbar />
            <Banner />
            <Teams />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
