import styles from "./AddItems.module.css";
// import {useState } from 'react';
import { useContext, useRef } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";


let AddItems = () => {

  const {handleNewItem} = useContext(TodoItemsContext)
  

  const todoNameRef = useRef("");
  const todoDateRef = useRef("");

  // BY THE HELP OF USE STATE HOOK
  // let [addNewItem, setAddNewItem] = useState("")
  // let [addDueDate, setAddDueDate] = useState("")
  // const noCountTodo = useRef(0)

  // const handleAddNewItem = (event) => {
  //   setAddNewItem(event.target.value)
  //   noCountTodo.current += 1
  // }

  // const handleAddDueDate = (event) => {
  //   setAddDueDate(event.target.value)
  //   console.log(noCountTodo)
  // }

  const handleAddButton = (event) => {
     event.preventDefault();
     const todoItemName = todoNameRef.current.value;
     const todoDueDate = todoDateRef.current.value;
     todoNameRef.current.value = "";
     todoDateRef.current.value = "";
     handleNewItem(todoItemName, todoDueDate)
    //  setAddNewItem("") used for useState
    //  setAddDueDate("")
  }

    return <>
  <form onSubmit={handleAddButton} className={`container ${styles.mRow}` }>
    <div className="row">
      <div className="col-6">
        {/* <input type="text"  placeholder="Write something" value = {addNewItem} onChange={handleAddNewItem}/> by use state */}
        <input type="text" ref={todoNameRef}  placeholder="Write something" />
      </div>
      <div className="col-4">
        {/* <input type="date"  value= {addDueDate} onChange={handleAddDueDate}/> by use state */}
        <input type="date"  ref={todoDateRef} />
      </div>
      <div className="col-2">
        <button type="submit" className={`btn btn-success ${styles.sBtn}`} >
          <IoIosAddCircleOutline />
        </button>
      </div>
    </div>
  </form>
  </>
}

export default AddItems 