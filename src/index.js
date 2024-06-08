import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { persistor } from "./features/store";
//eslint-disable-next-line
import firebaseConfig from "./firebase.config";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./features/store";

import { root } from "./features/store";

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={"lodading"} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
