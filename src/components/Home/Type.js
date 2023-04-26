import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'MERN Stack Developer',
          'Start-Up Contributor',
          'Committed Open Source Contributor',
          'Effective Problem Solver',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
