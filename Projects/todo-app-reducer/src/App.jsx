import AppName from './components/AppName';
import AddItems from './components/AddItems';
// import Item from './components/Item'; 
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoItemsContextProvider from './store/todo-items-store';

function App() {
  return (                                       
    <TodoItemsContextProvider>
      <AppName></AppName>
      <AddItems></AddItems>
      <WelcomeMessage></WelcomeMessage>
      <TodoItems></TodoItems>
    </TodoItemsContextProvider>
  );
}

export default App
