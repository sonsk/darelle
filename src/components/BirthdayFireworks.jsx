import React, { useState, useEffect,useRef } from 'react';

import {Fireworks} from '@fireworks-js/react';
import {TheDay} from './TheDay'

const BirthdayFireworks = () => {
  const [isBirthday, setIsBirthday] = useState(false);
const fireWorksRef = useRef(null)
  useEffect(() => {
    // Vérifier si c'est l'anniversaire aujourd'hui
    const birthDate = TheDay;
    const today = new Date();
    if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
      setIsBirthday(true);
    } else {
      setIsBirthday(false);
    }
  }, []);

  return (
    <div>
     
      {isBirthday && <Fireworks
      ref={fireWorksRef} 
      options={{
        opacity:0.9,
        particles:400,
        explosion:10,
        intensity:100,
      }}
      
      />}
    </div>
  );
};

export default BirthdayFireworks;
