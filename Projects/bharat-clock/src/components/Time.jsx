function Time() {

    let dateNTime = new Date;
    let date = dateNTime.toLocaleDateString();
    let time = dateNTime.toLocaleTimeString();

    return <>
        <p>This is the current Time : {date} - {time}</p>
    </>
}

export default Time;