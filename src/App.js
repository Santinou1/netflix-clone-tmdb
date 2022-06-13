import { Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"; //Importacion del Hook
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Paypal } from "./pages/Paypal";
import { Profile } from "./pages/Profile";

function App() {
  const user = "Pepe";
  const classes = useStyles(); //Inicializacion del hook
  return (
    <div className={classes.root}>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/checkout">
              <Paypal />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  //Darle estilo a cada uno de los divs
  root: {
    
  },
}));

export default App;
