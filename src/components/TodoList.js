import React, { useEffect, useState } from 'react';
import AddToList from './AddToList';
import Header from './Header';
import MyTasks from './MyTasks';

export default function TodoList() {
    const [list, setList] = useState([]);
    const [checkedTasks, setCheckedTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [newValue, setNewValue] = useState([]);
    const [counter, setCounter] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('todoList');
        if (myList) {
            const todoList = JSON.parse(myList)
            setList(todoList);
            setCheckedTasks(new Array(todoList.length).fill(false));
            setNewValue(new Array(todoList.length).fill(''));
            setCounter(new Array(todoList.length).fill(0));
        }
    }, []);

    // add to list 
    const handleAddToList = (task) => {
        const newList = [...list, task];
        setList(newList);
        localStorage.setItem('todoList', JSON.stringify(newList));
        setNewValue([...newValue, '']);
        setCheckedTasks([...checkedTasks, false]);
        setCounter([...counter, 0]);

    }
    // on check change
    const onCheckChange = (index) => {
        setCheckedTasks(prevState => {
            const newCheckedTasks = [...prevState];
            newCheckedTasks[index] = !newCheckedTasks[index];
            return newCheckedTasks;
        });
    }
    // delete from list
    const deleteTask = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
        localStorage.setItem('todoList', JSON.stringify(newList));
    }
    // update a task
    const updateTask = (index) => {
        const val = newValue[index].trim();
        if (val !== '') {
            const newList = [...list];
            newList[index] = val;
            setList(newList);
            localStorage.setItem('todoList', JSON.stringify(newList));
        }
        setEditIndex(null);
    };
    // increment count
    const incrementCount = (index) => {
        setCounter(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index]++;
            return newCounters;
        });
    };

    return (
        <>
            <div className="flex justify-center items-center px-16 py-20 font-bold bg-white max-md:px-5">
                <div className="flex flex-col mt-5 w-full max-w-[1178px] max-md:max-w-full">
                    <AddToList addTask={handleAddToList} />
                    <Header /><MyTasks
                         list={list}
                         checkedTasks={checkedTasks}
                         onCheckChange={onCheckChange}
                         deleteTask={deleteTask}
                         updateTask={updateTask}
                         editIndex={editIndex}
                         newValue={newValue}
                         setEditIndex={setEditIndex}
                         setNewValue={setNewValue}
                         counter={counter}
                         incrementCount={incrementCount}
                         />                
                </div>
            </div>
        </>
    )
}
