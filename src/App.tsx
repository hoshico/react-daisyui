import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import { PrimaryBtn } from './atoms/PrimaryBtn';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className='btn btn-outline btn-accent inline-block cursor-pointer rounded-md bg-white-100 px-4 py-3 text-center text-4l font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900'>情報取得</button>
        <PrimaryBtn />
      </header>
    </div>
  );
}

export default App;
