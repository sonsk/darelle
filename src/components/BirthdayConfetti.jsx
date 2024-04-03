import React, { useState, useEffect } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti'
import {TheDay} from './TheDay'

export default function BirthdayConfetti() {
    const { width, height } = useWindowSize();
    const [isBirthday, setIsBirthday] = useState(false);

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
        {isBirthday && 
            <Confetti
      width={width}
      height={height}
    />
        }
         
    </div>
  )
}
