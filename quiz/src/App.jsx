import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import ResultComponent from './components/ResultComponent';
import QuizComponent from './components/QuizComponent';

function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent />
      <ResultComponent />
 
    </div>
  );
}

export default App;