import React from 'react';
import Details from './components/Details';
import Header from './components/Header';
import Input from './components/Input';




function App() {

  return (
    <div className="flex flex-col justify-center	items-center w-full	h-full bg-no-repeat  bg-top
		bg-[url('./assets/pattern-bg.png')] bg-[length:100%_60%]">
      <Header/>
      <Input />
      <Details/>
    </div>
  );
}

export default App;
