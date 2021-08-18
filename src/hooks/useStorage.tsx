import {ITask} from '../interfaces/interfaces';

const storageName = "NOTES";

export const useStorage = () => {
    const save = (task: ITask) => {
       let newTasks: ITask[] = [];
       const res = localStorage.getItem(storageName);
       if(res) {
        const result = JSON.parse(res);
        newTasks = [...result]
       }
       newTasks.push(task);
       localStorage.setItem(storageName, JSON.stringify(newTasks));
    }

    const removeTask = (id: number) => {
        let newTasks: ITask[] = [];
        const res = localStorage.getItem(storageName);
        if(res) {
            const result = JSON.parse(res);
            newTasks = result.filter((item: ITask) => item.id !== id);
        }

        localStorage.setItem(storageName, JSON.stringify(newTasks))
    }

    const updateTask = (task: ITask) =>{
        const res = getAll();
        if(res) {
            const result = res.filter((item) => item.id !== task.id);
            result.push(task);
            localStorage.setItem(storageName, JSON.stringify(result));
        }
    }

    const getTask = (task: ITask) => {
        const res = localStorage.getItem(storageName);
        if(res) {
            const result = JSON.parse(res);
            return result.filter((item: ITask) => item.id === task.id);
        } else {
            return null;
        }
    }

    const getAll = (): ITask[] => {
        let parsedRes: ITask[] = [];
        const res = localStorage.getItem(storageName);
        if(res) {
            parsedRes = JSON.parse(res);
        }

        return parsedRes;
    }

    return {save, removeTask, getTask, getAll, updateTask};
}

