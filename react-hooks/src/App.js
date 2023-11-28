import './App.css';
import ClassCounter from "./component/ClassCounter";
import HookCounter from "./component/HookCounter";
import HookName from "./component/HookName";
import HookList from "./component/HookList";

function App() {
  return (
    <div className="App">
        <HookList />
        <HookName />
        <HookCounter />
        <ClassCounter />
    </div>
  );
}

export default App;
