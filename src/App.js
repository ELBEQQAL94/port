import React from 'react';
import './App.css';

// Components
import Header from './components/header'
import About from './components/about'
import Bar from './components/bar'
import Skills from './components/skills'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Bar title={'Skills'}/>
      <Skills />
    </div>
  );
}

export default App;
