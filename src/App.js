import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout" component={<Checkout/>}>
            <Header />
            <Checkout />
          </Route>

          <Route path="/" component={<Home/>}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
