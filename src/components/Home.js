import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import InputList from "./InputList";

const getLocalItems = ()=>{
  let list = localStorage.getItem("Items")

  if(list){
    return JSON.parse(localStorage.getItem("Items"));
  }else{
    return [];
  }
}

const Home = () => {

  const [input, setInput] = useState("");
  const [addedItem, setAddedItem] = useState(getLocalItems());

  const toggleAdd = () => {
    setAddedItem([...addedItem, input]);
    setInput("");
  };

  const toggleDelete = (index) => {
    let newList = [...addedItem];
    newList.splice(index,1);
    setAddedItem([...newList]);
  };

  useEffect(()=>{
    localStorage.setItem("Items",JSON.stringify(addedItem));
  },[addedItem])


  return (
    <div>
      <Heading />
      <div className="card-parent">
        <div className="card">
          <InputBox
            toggleAdd={toggleAdd}
            setAddedItem={setAddedItem}
            input={input}
            setInput={setInput}
          />
          <div className="parent">
            {addedItem &&
              addedItem.map((item, i) => {
                return (
                  <InputList toggleDelete={toggleDelete} index={i} item={item} key={i} />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
