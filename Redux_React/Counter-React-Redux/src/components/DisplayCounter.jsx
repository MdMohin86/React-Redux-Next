import { useSelector } from "react-redux";

const DisplayCounter = () => {

    const counter = useSelector(store => store.counter);

    return <>
        <h1>
            Counter Current Value : {counter}
        </h1> 
    </>
}

export default DisplayCounter;
