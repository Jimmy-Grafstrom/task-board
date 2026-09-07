type Priority = 'Låg' | 'Medium' | 'Hög';

type TaskCardProps = {
    id: number;
    title: string;
    description: string;
    assignee: string;
    category: string;
    priority: Priority;
}
const styles = {
    card: "bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-lg p-4 flex flex-col gap-3 text-slate-200 shadow-sm transition-colors",
    header: "flex justify-between items-center text-xs",
    id: "font-semibold text-slate-500",
    title: "text-base font-bold text-white",
    description: "text-sm text-slate-300",
    footer: "pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400",
    categoryBadge: "bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700",
    h3: "text-base font-bold text-white",
}
const priorityColors: Record<Priority, string> = {
    'Hög': 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    'Medium': 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    'Låg': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
};



const TaskCard = (props: TaskCardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.header}>
                    <span className={styles.id}>ID: {props.id}</span>
                    <span className={`px-2 py-0.5 rounded-full border text-xs ${priorityColors[props.priority]}`}>{props.priority}</span>
            </div>
            <h3 className={styles.h3}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            <p>Ansvarig: {props.assignee}</p>
            <p>Kategori: <span className={styles.categoryBadge}>{props.category}</span></p>
        </article>
    );
};
export default TaskCard