import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import "./App.scss";
import NewPriceAndPlans from "./pages/price&plans/NewPriceAndPlans";
import NewSchedule from "./pages/schedule/NewSchedule";
import NewSignup from "./pages/signup/NewSignup";
import NewTrainers from "./pages/trainers/NewTrainers";
import AboutGym from "./pages/aboutgym/AboutGym";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {<Main />}
        </Route>
        <Route exact path="/priceplans">
          {<NewPriceAndPlans />}
        </Route>
        <Route exact path="/schedule">
          {<NewSchedule />}
        </Route>
        <Route exact path="/signup">
          {<NewSignup />}
        </Route>
        <Route exact path="/trainers">
          {<NewTrainers />}
        </Route>
        <Route exact path="/aboutgym">
          {<AboutGym />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
