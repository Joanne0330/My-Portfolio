import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopNavBar from './components/Navbar';
import ProjectsPage from './layout/ProjectsPage';
import HomePage from './layout/HomePage';
import InfoPage from './layout/InfoPage';


function App() {
  return (
        <Router>
          <div className="App">
            <TopNavBar />
            <Route exact path="/" component={HomePage}/>
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/info" component={InfoPage} />
          </div>
        </Router>
  );
}



export default App;
