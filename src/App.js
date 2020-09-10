import React from 'react';
import logo from './logo.svg';
import Main from './Main';
import TopNav from "./components/TopNav";
import { Sugar } from 'react-preloaders';
import MainContent from "./components/MainContent";
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
             <TopNav />
             <MainContent />
             <Sugar background="linear-gradient(0deg, rgba(26,18,69,1) 40%, rgba(55,114,147,1) 100%)" color="#f5f5f5"/> 
      </React.Fragment>
    </div>
  );
}

export default App;
