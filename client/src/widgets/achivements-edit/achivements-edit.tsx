import { useState } from "react";
import styles from "./achivements-edit.module.css";
import { mockTasks } from "@/entities/tasks/model/mock-tasks";
import type { Itask } from "@/entities/tasks/model/task-model";

interface AchivementsEditProps {
    userName: string;
}

const AchivementsEdit = ({ userName }: AchivementsEditProps) => {
    const [tasks, setTasks] = useState<Itask[]>(mockTasks);
    const [currentTask, setCurrentTask] = useState<Itask>(tasks[0]);
    const [inputValue, setInputValue] = useState<number>(1);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const taskTitle = event.target.value;
        const task = tasks.find(t => t.title === taskTitle);
        if (task) {
            setCurrentTask(task);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "") {
            setInputValue(0);
        } else {
            const value = parseInt(event.target.value);
            if (!isNaN(value) && value >= 0) {
                setInputValue(value);
            }
        } 
    };

    const updateTaskProgress = (newProgress: number) => {
        const validatedProgress = Math.max(0, newProgress);
        const updatedTasks = tasks.map(task => 
            task.id === currentTask.id 
                ? { ...task, currentProgress: validatedProgress } 
                : task
        );
        setTasks(updatedTasks);
        setCurrentTask({ ...currentTask, currentProgress: validatedProgress });
    };

    const increaseProgress = () => {
        updateTaskProgress(currentTask.currentProgress + inputValue);
    };

    const decreaseProgress = () => {
        updateTaskProgress(currentTask.currentProgress - inputValue);
    };

    return (
        <div className={styles.container}>
            <p className={styles.userName}>{userName}</p>
            <img className={styles.closeButton} src='close.png' alt='Закрыть'/>
            <hr/>
            <select 
                value={currentTask.title}
                onChange={handleChange}
                className={styles.selector}
            >
                {tasks.map((task) => (
                    <option key={task.id} value={task.title}>
                        {task.title}
                    </option>
                ))}
            </select>
      
            {currentTask && (
                <>
                    <p className={styles.description}>{currentTask.description}</p>
                    <div className={styles.progressControls}>
                        <p className={styles.progress}>Прогресс: {currentTask.currentProgress}</p>
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            className={styles.input}
                        />
                        <button className={styles.increaseButton} onClick={increaseProgress}>+</button>
                        <button className={styles.decreaseButton} onClick={decreaseProgress}>-</button>
                        <button className={styles.saveButton}>сохранить</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AchivementsEdit;