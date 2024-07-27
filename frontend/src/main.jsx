import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

//ProvideStore to provide store in all components
//ReactDevtools to monitor Query=(get) and mutation(post,put,delete)
const client = new QueryClient(); //create instance for client to be provided in QueryClientProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>  
      <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />  
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
