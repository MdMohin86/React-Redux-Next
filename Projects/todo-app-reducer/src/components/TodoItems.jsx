import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store.jsx"
import Item from "./Item.jsx"

const TodoItems = () => {

   const { todoItems } = useContext(TodoItemsContext)
   // const Items = conItems.todoItems;

   return <>
      {todoItems.map((todoItems) => {
        return (<Item key={todoItems.Iname} todoItem = {todoItems.Iname} todoDate = {todoItems.Idate} ></Item>)
      })}
   </>
}

export default TodoItems