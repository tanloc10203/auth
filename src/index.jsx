import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RequireAuth from './components/RequireAuth';
import Login from './feature/Login';
import Logout from './feature/Logout';
import Profile from './feature/Profile';
import Register from './feature/Register';
import "./i18n";
import './index.css';
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} >
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="logout" element={<Logout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalStyles>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);