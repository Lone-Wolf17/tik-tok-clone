import React from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './components/video/video';

export default function App() {

  return (
    <div className='app'>
      <div className='app__videos'>
        <Video />
      </div>
    </div>
  )
}


