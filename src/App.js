import React from 'react';
import logo from './logo.svg';
import TopNav from "./components/TopNav";
import MainContent from "./components/MainContent";
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <MainContent />
    </div>
  );
}

export default App;
