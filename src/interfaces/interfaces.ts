export interface TodoFormProps {
    onAddTask(task: ITask): void
}

export interface ITask {
    id: number,
    title: string,
    desc: string,
    status: string
}

export interface ITaskState {
    tasks: ITask[]
}