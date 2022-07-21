import React from 'react';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import s from './App.module.css';
import Inputs from './Inputs/Inputs';
import TopButtons from './TopButtons/TopButtons';

export const App = () => {
  return (
    <div className={s.container}>
      <TopButtons />
      <Inputs/>
    </div>
  );
};
