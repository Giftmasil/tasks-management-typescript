import { useState } from "react";
import { type Task } from "./types";

type FormProps = {
    addTask: (task: Task) => void
}

export default function Form({addTask}:FormProps) {
    const [text, setText] = useState('');

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!text) {
            alert('please enter a task');
            return;
        } 

        addTask({
            id: new Date().getTime().toString(),
            description: text,
            isCompleted: false
        })
        
        setText("")
    }


    return (
        <div>
            <h2>add a task</h2>
            <form className="form task-form" onSubmit={handleSubmit}>
            <input
            name="text"
            type="text"
            placeholder="add a task"
            className="form-input"
            onChange={(e) => setText(e.target.value)}
            value={text} 
            />
            <button type="submit" className="btn">add task</button>
            </form>
        </div>
    )
}