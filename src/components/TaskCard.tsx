type status = 'Låg' | 'Medium' | 'Hög';

type TaskCardProps = {
    id: number;
    title: string;
    description: string;
    assignee: string;
    category: string;
    status: status;
}
const TaskCard = (props: TaskCardProps) => {
    return (
        <article className={"task-card"}>
            <span className={"task-id"}>ID: {props.id}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Ansvarig: {props.assignee}</p>
            <p>Prioritet: <span className={"badge"}>{props.status}</span></p>
            <p>Kategori: <span className={"badge"}>{props.category}</span></p>
        </article>
    );
};
export default TaskCard