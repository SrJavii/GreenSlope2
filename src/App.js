import React from 'react';
import InfiniteScrollComponent from './components/InfiniteScrollComponent';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Resultados de Competición</h1>
      <InfiniteScrollComponent />
    </div>
  );
};

export default App;
