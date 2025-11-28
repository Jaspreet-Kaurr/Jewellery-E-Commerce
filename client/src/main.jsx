import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { store } from "./redux/store";



createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>

  <Provider store={store}>    {/* ✅ Now Redux is available throughout your app.*/}
  <ScrollToTop /> 
  <Toaster position="top-center" />
    <App />
  </Provider>
    
  </BrowserRouter>
)
