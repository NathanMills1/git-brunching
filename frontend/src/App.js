import React from "react";
import "./App.css";
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import LandingPage from "./landing/LandingPage";
import BookingPage from "./booking/BookingPage";
import NotFound from "./general/NotFound";
import RestaurantViewBookingPage from "./restaurant/RestaurantViewBookingPage";

const App = () => (
  <div className="App">
    <StylesProvider injectFirst>
      <Router>
        <Switch>
          {/* state is stored instead of creating a different route for each booking page because
          it was easier to implement */}
          <Route
            path="/booking"
            component={() => (
              <BookingPage />
            )}
          />
          <Route
            path="/restaurant"
            component={() => (
              <RestaurantViewBookingPage />
            )}
          />
          <Route
            exact
            path="/"
            component={() => <LandingPage />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </StylesProvider>
  </div>
);

export default App;
