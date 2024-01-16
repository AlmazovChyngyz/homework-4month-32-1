import './App.css';
import Modal from "./components/modal/Modal";
import {useState} from "react";
import Input from "./components/input/Input";
import CountPage from "./pages/countPage/CountPage";
import List from "./components/list/List";
import Button from "./components/button/Button";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: 'run',
        },
        {
            id: 2,
            task: 'push',
        },
        {
            id: 3,
            task: 'jump',
        },
        {
            id: 3,
            task: 'kick',
        },
        {
            id: 5,
            task: 'sleep',
        },
    ]);

  const [show, setShow]  = useState(false)

  const [input, setInput] = useState('')
  const handleShow = () => setShow(!show)

  const onChangeInput = (event) => {
      setInput(event.target.value)
  }

  return (
    <div className={"main"}>
        <CountPage/>
        {
         show && <Modal handleShow={handleShow}>
            <h1>Modal</h1>
            <Input placeholder={'Name'} type={'text'} onChangeInput={onChangeInput} />
            <h2>{input}</h2>
         </Modal>
        }
        <List tasks={tasks}/>
        <Button
            onClick={handleShow} label="OPEN"
        />
        {/*<button onClick={handleShow}>Open</button>*/}

    </div>
  );
}

export default App;
