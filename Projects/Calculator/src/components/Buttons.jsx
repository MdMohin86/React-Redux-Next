import styles from "./Buttons.module.css"

const Buttons = ({onBtnClick}) => {

    const btns = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  return <div className={styles.btnContainer}>
    {btns.map((item)=>{
        return <span><button key = {item} className={styles.btn} onClick={() => onBtnClick(item)}>{item}</button></span>
    })}
  </div> 
}

export default Buttons 