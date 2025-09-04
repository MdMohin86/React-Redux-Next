import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext();

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoNameDate = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoNameDate = [
      ...currTodoItems,
      {
        Iname: action.payload.newItem,
        Idate: action.payload.itemDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoNameDate = currTodoItems.filter(
      (item) => item.Iname !== action.payload.deleteNewItem
    );
  }
  return newTodoNameDate;
};

const TodoItemsContextProvider = ({ children }) => {
  const Items = [
    {
      Iname: "Buy Milk",
      Idate: "31/08/2024",
    },
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
  ];

  // const [todoItems, setTodoItems] = useState(Items)

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, Items);

  // // directly do spread operator can perform incorrectly because react has async system
  // // many states may in work so rather than only spread operator we change previous state by
  // // functional update

  // const handleNewItem = (newItem, itemDate) => {
  //   const newTodoNameDate = [...todoItems, {
  //     Iname : newItem,
  //     Idate : itemDate
  //   },]
  //   setTodoItems((newTodoNameDate))

  // setTodoItems((existingItems) => {
  //       const newTodoNameDate = [...existingItems, {
  //         Iname : newItem,
  //         Idate : itemDate
  //       },]
  //       return newTodoNameDate
  // })
  const handleNewItem = (newItem, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        newItem,
        itemDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  const handleDeleteBtn = (deleteNewItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        deleteNewItem,
      },
    };

    dispatchTodoItems(deleteItemAction);
    // console.log(`${deleteNewItem} deleted`)
    // const newTodoList = todoItems.filter(item =>item.Iname !== deleteNewItem)
    // setTodoItems(newTodoList)
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        handleNewItem: handleNewItem,
        handleDeleteBtn: handleDeleteBtn,
      }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
