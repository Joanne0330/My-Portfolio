import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopNavBar from './components/Navbar';
import ProjectsPage from './layout/ProjectsPage';


function App() {
  return (
       <Router>
         <div className="App">
          <TopNavBar />
          <Route exact path="/" />
          <Route path="/projects" component={ProjectsPage} />
        </div>
      </Router>
  );
}

export default App;
