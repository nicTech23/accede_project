import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import PageLayout from './components/PageLayout';
import ArticlePage from './Pages/ArticlePage';
import EditorPage from './Pages/EditorPage';
import Profile from './Pages/ProfilePage';
import Settings from './Pages/SettingsPage';
function App() {
  return (
    <PageLayout>
      <Settings/>
    </PageLayout>
  );
}

export default App;
