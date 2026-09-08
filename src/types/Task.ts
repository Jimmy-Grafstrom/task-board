export type TaskStatus = 'Att göra' | 'Pågår' | 'Klart';

export type Priority = 'Hög' | 'Medium' | 'Låg';

export type Task = {
    id: number;
    title: string;
    description: string;
    assignee: string;
    category: string;
    priority: Priority;
    status: TaskStatus;
}

export type NewTask = {
    title: string;
    description: string;
    assignee: string;
    category: string;
    priority: Priority;
};
