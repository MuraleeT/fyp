import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import ListSightingComponent from './Components/ListSightingComponent';
import HeaderComponent from './Components/HeaderComponent';
import CreateSightingComponent from './Components/CreateSightingComponent';

function App() {
  return (
    <div>
      <Router>
        <div className ="container">
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route exact path = "/" element = {<CreateSightingComponent/>}></Route>
              <Route path = "/sightings" element = {<ListSightingComponent/>}></Route>
              <Route path = "/add-sighting" element = {<CreateSightingComponent/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
