import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { ListComp } from "./ListComp";

export const ToDo_Material_Ui = () => {
  const [item, setitem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setitem(event.target.value);
  };

  const listOfitems = () => {
    setNewItem((prevalue) => {
      return [...prevalue, item];
    });
    setitem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add a item"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfitems}>
            <AddSharpIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val,index) => {
              return <ListComp key={index} text= {val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
