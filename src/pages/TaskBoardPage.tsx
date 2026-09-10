import { useState } from "react";
import Column from "../components/Column.tsx";
import TaskCard from "../components/TaskCard.tsx";
import type { Task } from "../types/Task.ts";

type TaskBoardPageProps = {
    tasks: Task[]
}
const TaskBoardPage = ({tasks}: TaskBoardPageProps) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTasks = tasks.filter((task) => {
        const query = searchQuery.toLowerCase().trim();
        return (
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query) ||
            task.assignee.toLowerCase().includes(query) ||
            task.category.toLowerCase().includes(query) ||
            task.priority.toLowerCase().includes(query)
        );
    });

    const todoTasks = filteredTasks.filter((task) => task.status === "Att göra");
    const inProgressTasks = filteredTasks.filter((task) => task.status === "Pågår");
    const doneTasks = filteredTasks.filter((task) => task.status === "Klart");

    return (
        <div>
            <div className={"max-w-lg mx-auto mb-8 px-4"}>
                <label htmlFor={"search"} className={"block text-sm font-medium text-slate-300 mb-1"}>Sök
                    uppgifter</label>
                <input
                    id={"search"}
                    type={"text"}
                    placeholder={"Sök..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={"w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"}
                />
            </div>

            <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto
  px-4 items-start">
                <Column title="Att göra">
                    {todoTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            assignee={task.assignee}
                            category={task.category}
                            priority={task.priority}
                        />
                    ))}
                </Column>

                <Column title="Pågår">
                    {inProgressTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            assignee={task.assignee}
                            category={task.category}
                            priority={task.priority}
                        />
                    ))}

                </Column>
                <Column title="Klart">
                    {doneTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            assignee={task.assignee}
                            category={task.category}
                            priority={task.priority}/>
                    ))}
                </Column>
            </main>
        </div>
    )
}
export default TaskBoardPage;