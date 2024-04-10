import React from 'react';
import './App.css';
import './tailwind.css';
import countAge from './components/countAge';
import Mycountdown from './components/Mycountdown';
import AgeMessage from './components/AgeMessage';
import BirthdayFireworks from './components/BirthdayFireworks'
import BirthdayConfetti from  './components/BirthdayConfetti'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/darellebirthday.matomo.cloud/container_oO70KSDz.js'; s.parentNode.insertBefore(g,s);
   }, [])
  const age = countAge();

  return (
    <div className="App min-h-screen ">
      <div className="">
        <Header/>
      </div>
     
      <div className="relative">
        <div className="relative w-full md:w-1/2 mx-auto flex justify-center items-center">
          <div className="w-full  ">
            <p className="age text-center"> {age} </p>
          </div>
          <div className="absolute top-0 left-0 w-full  flex justify-center items-center ">
            <img src="cake.png" className="cake" alt="hbd"/>
          </div>
        </div>
      </div>
      <AgeMessage age={age} />

      <div className=" bottom-0 md:text-5xl text-2xl font-bold ">
        <Footer/>
      </div>
     

    
    <BirthdayConfetti/>
    {/* <BirthdayFireworks/> */}
    </div>
  
  );
}

export default App;
