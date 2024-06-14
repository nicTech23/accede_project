import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ArticlePage from './Pages/ArticlePage';
import EditorPage from './Pages/EditorPage';
import Profile from './Pages/ProfilePage';
import PageLayout from './components/PageLayout';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signup from './Pages/ AuthenticationPage/SignUpForm';
import Login from './Pages/ AuthenticationPage/SignInForm';
import Settings from './Pages/SettingsPage';
import HomePage2 from './Pages/HomePage/index2';
import SettingsProvider from './services/contexts/settingsContext';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/tag",
      element: <HomePage2/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Signup/>,
    },
    {
      path: "/article/:slug",
      element: <ArticlePage/>,
    },
    {
      path: "/profiles/:username",
      element: <Profile/>,
    },
    {
      path: "/settings",
      element: <Settings/>,
    },
    {
      path: "/editor",
      element: <EditorPage/>,
    },
  ]);
  
  return (
    <PageLayout>
      <RouterProvider router={router}/>
    </PageLayout>
  );
}

export default App;
