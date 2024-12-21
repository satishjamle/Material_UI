import React, { useState } from 'react';
import {questions} from'./Api'
import { Flag } from '@mui/icons-material';

export const MyAccordian = ({ question,answer}) => {

    const[show, setSHOW] = useState(false)


  return (

<>
<div className="main-heading">
    <p onClick={()=> setSHOW(!show)}> {show ? "⛔":"➕"}</p>
    <h3>{question}</h3>
</div>
{ show &&  <p className='answers'>{answer}</p>}

</> 
)
}
