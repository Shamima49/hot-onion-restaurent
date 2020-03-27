import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Food from './component/Food/Food';
import Banner from './component/Banner/Banner';
import NotFound from './component/NotFound/NotFound';
import FoodDetails from './component/FoodDetails/FoodDetails';
import FoodItems from './component/FoodItems/FoodItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      
      <Router>
         <Switch>
            <Route exact path="/">
                <Header></Header>
                <Banner></Banner>
                <Food></Food>
            </Route>
            <Route path="/food/:id">
                <Header></Header>
                <FoodDetails></FoodDetails>
            </Route>
          
            <Route path="*">
              <NotFound></NotFound>
            </Route>
         </Switch>
       </Router>
    
    </div>
  );
}

export default App;
