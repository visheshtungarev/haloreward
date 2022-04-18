import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { store, persistor } from "./store";

import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <Suspense fallback={<h6>loading</h6>}>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </Suspense>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
