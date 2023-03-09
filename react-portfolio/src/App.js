import React from "react";
import './App.css';
import Main from './main';
import Navbar from './partials/navbar';
import Footer from './partials/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
