import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <ChakraProvider theme={theme}>
        <Auth0Provider
          domain="dev-86b9hth2.us.auth0.com"
          clientId="eOUG4n9Shg3PsDFIh7z9JX72izd3EVkI"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </ChakraProvider>
    </Router>
  </Provider>
);
