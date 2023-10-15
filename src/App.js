import logo from "./logo.svg";
import "./App.css";
// import LoginPage from "./Login";
// function App() {
//   return (
//     <div className="App">
//       <LoginPage />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/create-account" exact component={CreateAccount} />
      </Switch>
    </Router>
  );
}

export default App;
