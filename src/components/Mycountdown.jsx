import React from 'react';
import Countdown from 'react-countdown';
import {TheDay} from './TheDay'

const MyCountdown = () => {
  const birthDate = TheDay;
  const today = new Date();
  let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  // Vérification si la date de naissance est aujourd'hui
  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
    return <p>HAPPY BIRTHDAY !</p>;
  }

  // Vérification si l'anniversaire de cette année est déjà passé
  if (today.getTime() > nextBirthday.getTime()) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = nextBirthday.getTime() - today.getTime();
  const daysUntilBirthday = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const renderer = ({ days }) => {
    if (daysUntilBirthday === 0) {
      return <p>HAPPY BIRTHDAY !</p>;
    } else {
      return <p>{daysUntilBirthday} days left</p>;
    }
  };

  return (
    <div>
      <Countdown date={nextBirthday} renderer={renderer} />
    </div>
  );
};

export default MyCountdown;
