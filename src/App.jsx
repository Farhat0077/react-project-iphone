import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './Header';
import MainBody from './MainBody';
import IphoneFeatures from './IphoneFeatures';
import Footer from './Footer';
function App() {
  return (
    <div className="container">
    <Header/>
    <MainBody/>
    <IphoneFeatures/>
    <Footer/>
    </div>
  );
}
export default App;
