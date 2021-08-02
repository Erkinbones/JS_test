// import Routes from "./Routes";
import './App.css';
import ToDoContextProvider from './components/context/ToDoContext';
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <ToDoContextProvider>
        <Routes/>
      </ToDoContextProvider>
    </div>
  );
}

export default App;
