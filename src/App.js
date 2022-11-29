import React from 'react';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <div className="container">
  <BrowserRouter>
 
  <Route exact path="/new_react_portfolio">
          <Home/>
        </Route>

      

        
  </BrowserRouter>

    
  
    </div>



  );
}


export default App;
