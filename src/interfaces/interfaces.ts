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

export interface IThemeState {
    theme: string
}

export interface ITheme {
    theme: string
}