import styles from "./Input.module.css"

const Input = ({displayValue}) => {
    return <>
        <input type="text" className={styles.calc} value={displayValue} readOnly />
    </>
}

export default Input