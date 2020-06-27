export interface TodoFormProps {
    onAddTask(obj: object): void
}

export interface ITask {
    id: number,
    title: string,
    desc: string
}

export interface IIDTask {
    id: number
}

export interface ITaskState {
    tasks: ITask[]
}