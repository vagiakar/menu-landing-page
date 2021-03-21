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
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/item/:id" component={MenuItem} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
