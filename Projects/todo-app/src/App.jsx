import AppName from './components/AppName';
import AddItems from './components/AddItems';
// import Item from './components/Item'; 
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { TodoItemsContext } from './store/todo-items-store';


function App() {

  const Items = [
    // {
    //   Iname : "Buy Milk",
    //   Idate : "31/08/2024"
    // },
    // {
    //   Iname : "Buy Potato",
    //   Idate : "31/08/2024"
    // },
    // {
    //   Iname : "Buy Chips",
    //   Idate : "Buy immediately"
    // },
    // {
    //   Iname : "Buy Mango",
    //   Idate : "Buy Anyday"
    // },
  ]
  
  const [todoItems, setTodoItems] = useState(Items)


  // // directly do spread operator can perform incorrectly because react has async system
  // // many states may in work so rather than only spread operator we change previous state by 
  // // functional update

  // const handleNewItem = (newItem, itemDate) => {
  //   const newTodoNameDate = [...todoItems, {
  //     Iname : newItem,
  //     Idate : itemDate
  //   },]
  //   setTodoItems((newTodoNameDate))

  const handleNewItem = (newItem, itemDate) => {
    setTodoItems((existingItems) => {
          const newTodoNameDate = [...existingItems, {
            Iname : newItem,
            Idate : itemDate
          },]   
          return newTodoNameDate  
    })
  }

  const handleDeleteBtn = (deleteNewItem) => {
    // console.log(`${deleteNewItem} deleted`)
    const newTodoList = todoItems.filter(item =>item.Iname !== deleteNewItem)
    setTodoItems(newTodoList)
 }

  return (                                       
    <TodoItemsContext.Provider value = {{
      todoItems: todoItems,
      handleNewItem: handleNewItem,
      handleDeleteBtn: handleDeleteBtn
      }}>
      <AppName></AppName>
      <AddItems></AddItems>
      <WelcomeMessage></WelcomeMessage>
      <TodoItems></TodoItems>
      {/* <Item todoItem = "Buy Milk" todoDate = "31/08/2024"></Item>
      <Item todoItem = "Buy Potato" todoDate = "31/08/2024"></Item> */}
    </TodoItemsContext.Provider>
  );
}

export default App
