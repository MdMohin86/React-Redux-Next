const Input = ({inp}) => {

    // const inp = (event) => {
    //     console.log(event.target.value)
    // }

    return <>
        <input type="text" onKeyDown={inp}/>
    </>
}

export default Input