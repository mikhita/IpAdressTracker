import React from 'react';
import Details from './components/Details';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';




function App() {
const [ipAdress, setIpAdress] = useState("");

interface FormDataType {ipAdress:string};
const responseBody: FormDataType = {ipAdress: ""};

const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  responseBody.ipAdress = ipAdress
}
const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  setIpAdress(event.target.value)
}

  return (
    <div className="flex flex-col justify-center	items-center w-full	h-full bg-no-repeat  bg-top
		bg-[url('./assets/pattern-bg.png')] bg-[length:100%_60%]">
      <Header/>
      <Input onSubmitHandler={onSubmitHandler} inputChangeHandler={inputChangeHandler} />
      <Details ipAdress={ipAdress}/>
    </div>
  );
}

export default App;
