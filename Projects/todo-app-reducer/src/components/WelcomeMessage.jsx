import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css"
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const WelcomeMessage = () => {
    const {todoItems} = useContext(TodoItemsContext)

    return todoItems == 0 && <h2 className={styles.welcome}> <AiOutlineFundProjectionScreen></AiOutlineFundProjectionScreen> ENJOY YOUR DAY!!</h2>
}

export default WelcomeMessage