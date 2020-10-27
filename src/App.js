import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopNavBar from './components/Navbar';


function App() {
  return (
       <Router>
         <div className="App">
          <TopNavBar />
          <Route exact path="/" />
          <Route path="/projects" />
          <h1>Welcome to Joanne</h1>
        </div>
      </Router>
  );
}

export default App;
