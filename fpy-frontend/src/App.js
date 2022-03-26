import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import ListSightingComponent from './Components/ListSightingComponent';
import HeaderComponent from './Components/HeaderComponent';
import CreateSightingComponent from './Components/CreateSightingComponent';
import ListUserComponent from './Components/ListUserComponent';
import Homepage from './Components/Homepage';
import RemoveMetadataComponent from './Components/RemoveMetadataComponent';

function App() {
  return (
    <div>
      <Router>
        <div className ="container">
          
          <div className="container">
            <Routes>
              <Route exact path = "/" element = {<Homepage/>}></Route>
              <Route path = "/sightings" element = {<ListSightingComponent/>}></Route>
              <Route path = "/add-sighting" element = {<CreateSightingComponent/>}></Route>
              <Route path = "/remove-metadata" element = {<RemoveMetadataComponent/>}></Route>
              <Route path = "/users" element = {<ListUserComponent/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
