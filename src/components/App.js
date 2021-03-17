import "../App.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Home from "../pages/Home.js";
import Menu from "../pages/Menu.js";
import Error from "../pages/Error.js";
import MenuItem from "../pages/MenuItem.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/item">
            <MenuItem />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
