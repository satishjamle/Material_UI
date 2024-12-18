import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



export const MaterialUI = () => {
  const [num, setNum] = useState(5);

  const IncNum = () => {
    setNum(num + 1);
  };

  const DecNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("sorry  zero limit not reached");
      setNum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">

          <Tooltip title="Add">

            <Button className="button_green" style={{ marginRight: "40px" }} onClick={IncNum}>
              <AddCircleIcon />
            </Button>
            </Tooltip>


            <Tooltip title="Delete">

            <Button style={{ marginRight: "40px" }}  onClick={DecNum}  className="button_red">
              <RemoveCircleIcon />
            </Button>
            </Tooltip>

          </div>
        </div>
      </div>
    </>
  );
};
