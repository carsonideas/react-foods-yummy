import React from 'react';
import MyFoodHeaderBox from './components/MyFoodHeaderBox';
import MyFoodListBox from './components/MyFoodListBox';
import MyFoodThankYouNote from './components/MyFoodThankYouNote';
import { myfoodlistdata } from './components/myfoodlistdata';
import './App.css';

function App() {
  return (
    <div className="myfoodapp">
      <div className="myfoodcontainer">
        <MyFoodHeaderBox />
        <MyFoodListBox foods={myfoodlistdata} />
        <MyFoodThankYouNote />
      </div>
    </div>
  );
}

export default App;
