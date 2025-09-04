import ProjectName from "./components/ProjectName";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import { useState } from "react";

function App() {

  const [calcVal, setCalcVal] = useState("")
  const onBtnClick = (btnText) => {
    if (btnText === "C"){
      setCalcVal("")
    }else if(btnText === "="){
      const result = eval(calcVal)
      setCalcVal(result)
    }else{
      let newDisplayValue = calcVal + btnText;
      setCalcVal(newDisplayValue);
    }
  }

  return (
    <>
      <Container>
        <p>I am your Happy Calculator</p>
      </Container>

      <Container>
        <ProjectName></ProjectName>
        <Input displayValue = {calcVal}></Input>
        <Buttons onBtnClick={onBtnClick}></Buttons>
      </Container>

      <Container>
        <p style={{color: 'red'}}>*Disclaimer: Use me for the correct results, wish you for the best!</p>
      </Container>

    </>
  );
}

export default App;