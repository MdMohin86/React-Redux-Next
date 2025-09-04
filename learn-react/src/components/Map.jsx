import MapErr from "./MapErr";
import MapItems from "./MapItems";
import Input from "./Input";
import { useState } from "react";

let Map = () => {
//   let vegs = ["Chawal", "Bhindi", "Dal", "Bengan", "Kathal", "Arbi", "Tori"];
  // let vegs = []

  let [initialState,updateState] = useState("Here is the Input value");

  let [vegs, setVegs] = useState(["Bhindi" , "Chawal"])

  const inp = (event) => {
    if(event.key === "Enter"){
        let enterItem = event.target.value;
        let newItem = [...vegs,enterItem];
        setVegs(newItem);
        event.target.value = ''
    }
    updateState(event.target.value);
}

  return (
    <>
        <h3>To Buy Vegetables</h3>
        <Input inp={inp}></Input>
        <p>{initialState}</p>
        <MapErr items={vegs}></MapErr>
        <MapItems items={vegs}></MapItems>
    </>
  );
};

export default Map;
