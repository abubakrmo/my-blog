import './App.css';
import Navbar from './navbar';
import Homepage from './homepage';
import { BrowserRouter as Switch, Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <div className="content">
          <Switch>
            <Route path='/'>
              <Homepage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
