import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet';
import Welcome from './components/classGreet';
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/List";
import Persons from "./components/Persons";
import Inline from "./components/Inline";
import './components/appStyles.css'
import styles from './components/appStyles.module.css'


function App() {
  return (
    <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline/>

        <Persons/>
        {/*<NameList/>*/}

        <UserGreeting/>
        <br/>
        <ParentComponent/>
        <FunctionClick/>
        <ClassClick/>
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
