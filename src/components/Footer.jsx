import React from 'react';
import Mycountdown from './Mycountdown';

export default function Footer() {
  return (
    <div className="w-full fixed bottom-0 py-4">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <div className="font-light">
          <Mycountdown/>
        </div>
        <div className="text-center">
            <p className="age-bottom font-light">20</p>
            <p className="pt-4">April</p>
        </div>
      </div>
      <div>
        <p className="text-center text-xs font-light">made with heart by steve@sonsk-2024</p>
      </div>
     
    </div>
  );
}
