import { useContext } from "react";
import styles from "./Item.module.css";
import { MdAutoDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
 
let Item = ({todoItem, todoDate}) => {

    const {handleDeleteBtn} = useContext(TodoItemsContext)

    return <>
            <div className = {`container ${styles.mRow} ` }>
                <div className="row">
                    <div className="col-6">
                        {todoItem}
                    </div>
                    <div className="col-4">
                        {todoDate}
                    </div>
                    <div className="col-2">
                        <button type="button" className={`btn btn-danger ${styles.sBtn}`} onClick={() => handleDeleteBtn(todoItem)}><MdAutoDelete/></button>
                    </div>
                </div>
            </div>
    </>
}

export default Item