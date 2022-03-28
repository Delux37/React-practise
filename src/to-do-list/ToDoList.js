import CustomInput from "./input/customInput";
import CustomButton from "./button/CustomButton";
import {useState} from "react";
import List from "./list/List";

function ToDoList() {
    const [list, setList] = useState([
        {
            todo: 'Workout',
            isDone: false
        },
        {
            todo: 'Sleep',
            isDone: true
        }
    ]);
    const [userInput, setUserInput] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
    const [buttonText, setButtonText] = useState('Add');

    function updateUserInput(val) {
        setUserInput(val);
    }

    function addList() {
        setList((prev) => [...prev, {
            todo: userInput,
            isDone: false
        }]);
        setUserInput('');
    }

    function editText() {
        setList(prev => {
            const val = [...prev];
            val[editIndex]['todo'] = userInput
            return val;
        })
        setEditIndex(-1);
        setUserInput('');
    }

    function toggleIsDone(index) {
        const listCopy = [...list];
        listCopy[index].isDone = !listCopy[index].isDone;
        setList(listCopy);
    }

    function handleDelete(index) {
        setList(prev => [...prev].filter((e,i) => i !== index))
    }

    function handleEdit(index) {
        setEditIndex(index);
        setUserInput(list[index].todo);
        setButtonText('Edit');
    }

    return (
        <div className="
        container bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4
        flex flex-col gap-3
        ">
            <p className="block text-gray-700 text-sm font-bold mb-2">
                Please enter your todos
            </p>
            <CustomInput
                userInput={userInput}
                updateUserInput={(val) => updateUserInput(val)}
            />
            <List
                list={list}
                toggleIsDone={(index) => toggleIsDone(index)}
                handleDelete={(index) => handleDelete(index)}
                handleEdit={(index) => handleEdit(index)}
            />
            <CustomButton
                handleClick={() => {
                    editIndex > -1 ? editText() : addList()
                }}
                text={buttonText}
            />
        </div>
    )
}

export default ToDoList;
