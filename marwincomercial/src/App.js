import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Sass/App.scss";
//components
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Header/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// views
import Home from "./views/Home/Home";
//context

class App extends React.Component {
  render() {
    return (
      <>

          <Router>
            <NavBar />
            {/* <ItemListContainer /> */}
            <ItemDetailContainer />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route
                path="/category/:categoryName"
               
              ></Route>


            </Switch>
          </Router>

      </>
    );
  }
}

export default App;
