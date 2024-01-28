import './App.css';
import User from './components/user/User';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import Input from './components/input/Input';
import CountPage from './pages/CountPage/CountPage';
import Button from './components/button/Button';
import Todo from './components/todo/Todo';
import TodoList from './components/TodoList/TodoList';


function App() {
    const [ show, setShow ] = useState(false);
    const [ input, setInput ] = useState('');
    const [tasks, setTasks] = useState([{
        id:1 ,
        task: 'run'
    },
        {
            id:2,
            task: 'hit'
        },
        {
            id:3,
            task: 'jump'
        }])

    const handleShow = () => setShow(!show);

    const handleAdd = () => {
        setTasks(prev => [ ...prev, {
                id: tasks.length + 1,
                task: input
            }
            ]
        );
        console.log(tasks);
    };

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };

    const handleDelete = (id) => {
        console.log(id);
        const deleted = tasks.filter(task => task.id!==id)
        setTasks(deleted)
    }

    return (
        <div>
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    onChangeInput={onChangeInput}
                    handleAdd={handleAdd}
                >

                </Modal>
            }
            <Button action={handleShow} text={'открыть'}/>
            <TodoList tasks={tasks} handleDelete={handleDelete}/>
        </div>
    );
}


export default App;