import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MaterialUI } from './Component/MaterialUI';
import { ToDo_Material_Ui } from './Component/ToDo_Material_Ui';
import { Bootstrap } from './Component/Bootstrap';
import { Accordian } from './Component/accordian/Accordian';
import { R_Bootstrap } from './Component/R_Bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MaterialUI/> */}
    {/* <ToDo_Material_Ui/> */}
    {/* <Bootstrap/> */}
    {/* <Accordian/> */}
    <R_Bootstrap/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
