import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/classGreet';
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
        <Message />
        <Counter />
        <Greet name={
            {
                firstName: 'John',
                lastName: 'Doe'
            }
        }>
            <p>What is your last name? </p>
        </Greet>
        <Welcome name={
            {
                firstName: 'John',
                lastName: 'Doe'
            }
        }/>
    </div>
  );
}

export default App;
