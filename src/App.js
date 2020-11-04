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
          <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage}/>
          <Route path={process.env.PUBLIC_URL + "/projects"} component={ProjectsPage} />
        <Route path={process.env.PUBLIC_URL + "/info"} component={InfoPage} />
        </div>
      </Router>
  );
}

export default App;
