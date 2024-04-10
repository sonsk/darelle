import React, { useState, useEffect } from 'react';
import {TheDay} from './TheDay'

export default function AgeMessage(props) {
    const [isBirthday, setIsBirthday] = useState(false);
    const birthDate = TheDay;
    const today = new Date();
 
    useEffect(() => {
      // Vérifier si c'est l'anniversaire aujourd'hui
      
      if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
        setIsBirthday(true);
      } else {
        setIsBirthday(false);
      }
    }, []);
  return (
    <div className="mt-5 md:hidden font-mono">
      {isBirthday ? (
        <div>
            <p className="relative top-20 text-center  text-2xl">
            <span className="border-solid border-2 border-blue-200 rounded-full p-2 px-4">I'm {props.age}  </span>
            <span></span>
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-3xl mt-5 sm:text-xl font-bold">
            It's my birthday
            </p>
            <p className="relative w-8/12 mx-auto top-20 text-center  font-light">
            <img src="piip.png" className="piip hidden hidden-on-custom" alt="piip"/>
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-3xl mt-5 sm:text-xl font-light">
            May the dreams I'm working on come true
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-small font-light">
            "Love you...Ton gros bb"
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-small font-light">
            "Rdv Parc 18h30"
            </p>
        </div>
      ) : (
        <div>
            <p className="relative top-20 text-center  text-2xl">
            <span className="border-solid border-2 border-red-200 rounded-full p-2 px-4">I'm {props.age}  </span>
            <span></span>
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-xl mt-5  font-light">
            Not yet my birthday
            </p>
            <p className="relative w-10/12 mx-auto top-20 text-center  text-xl mt-5  font-light">
                All I have to do now is work to achieve what I've set out to do.
            </p>
            <p className="relative w-8/12 mx-auto top-20 text-center  font-light">
            <img src="angry.png" className="angry hidden hidden-on-custom" alt="angry"/>
            </p>
        </div>
        
      )}
      
    </div>
  );
}
