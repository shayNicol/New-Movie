import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Home from './component/Home/Home'
import "./App.css";
// import Moviedetail from "./component/Movie/Moviedetail";
import DarkMode from './component/DarkMode/DarkMode'



const App = () => {
    return (<div className="app">
    <Router>
      <Header></Header>
      <DarkMode></DarkMode>
      <div className="container">
      <Switch>
      <Route path="/" exact component={Home}/>
      {/* <Route path="/movie/:id" component={Moviedetail}/> */}
      <Route  path = '/*' component={PageNotFound}/>
      </Switch>
      </div>
      <Footer />
    </Router>
  </div>
  );
};

export default App;

