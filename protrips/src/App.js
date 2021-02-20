import React, { useState } from 'react'
import './App.css';
import './Components/Home.css';
import Home from './Components/Home'
import AddTrip from './Components/AddTrip'
import List from './Components/List'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


function App() {
  const [trips, setTrips] = useState('');

  
  const handleCallback = (childData) => {
    setTrips(childData)
  }
  
  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          <button>
            <Link to="/"><img src="https://img.icons8.com/metro/50/000000/home.png" alt="home-button" /></Link>
          </button>
          <button>
            <Link to="/addTrip"><img src="https://img.icons8.com/ios/50/000000/calendar--v1.png" alt="add-trip-button" /></Link>
          </button>
          <button>
            <Link to="/showTrip"><img src="https://img.icons8.com/pastel-glyph/50/000000/around-the-globe--v1.png" alt="all-trip-button" /></Link>
          </button>
        </div>
        <Switch>
          <Route exact path="/">
            <Home trips={trips} />
          </Route>
          <Route path="/addTrip">
            <AddTrip initializeTripList={handleCallback} />
          </Route>
          <Route path="/showTrip">
            <List trips={trips} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;