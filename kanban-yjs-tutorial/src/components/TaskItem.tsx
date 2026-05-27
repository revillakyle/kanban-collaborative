import type { FC, ChangeEvent } from "react";
import { useCallback } from "react";
import styles from '../styles/TaskItem.module.css';
import { updateTask } from "../taskStore.ts";
import type { Task } from "../types.ts";

interface Props{
    task:Task;
}

export const TaskItem:FC<Props> = ({ task }) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>)=>{
            updateTask(task.id,event.target.value)
        },[task]
    )
    
    
    return(
        <li className={styles.listitem}>
            <button type="button" className={styles.button}>
                <svg
                    width="24"
                    height="24"
                    viewBox="6 0 12 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <title>Drag</title>
                    <circle cx="9" cy="12" r="1"/>
                    <circle cx="9" cy="5" r="1"/>
                    <circle cx="9" cy="19" r="1"/>
                    <circle cx="15" cy="12" r="1"/>
                    <circle cx="15" cy="5" r="1"/>
                    <circle cx="15" cy="19" r="1"/>
                </svg>
            </button>
            <input className={styles.input} value={task.value} onChange={handleChange}/>
        </li>
    )
}