import React, { useState } from 'react';
import { Accordion } from '@mui/material';
import { questions } from './Api';
import { MyAccordian } from './MyAccordian';



export const Accordian = () => {

    const[data, setData] = useState(questions)
    

  return (
<>
<section className="main_div">
    <h1 style={{textTransform:'capitalize my-3'}}>React interview question</h1>
{
    data.map((currElem)=>{
        const{id} = currElem
        return <MyAccordian key={id}{...currElem} />
    })
}
</section>
</> 
 )
}
