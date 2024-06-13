import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import PageLayout from './components/PageLayout';
import ArticlePage from './Pages/ArticlePage';
import EditorPage from './Pages/EditorPage';
import Profile from './Pages/ProfilePage';
import Settings from './Pages/SettingsPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signup from './Pages/ AuthenticationPage/SignUpForm';
import Login from './Pages/ AuthenticationPage/SignInForm';

function App() {


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Signup/>,
    },
  ]);
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
