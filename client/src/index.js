
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode> 
  <BrowserRouter>
  <Provider store={store}>
    <ScrollToTop />
    <HomePage />
 </Provider>,
  </BrowserRouter>,
  </React.StrictMode> ,
  document.getElementById("root")
);
