import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import TaskCard from "./components/TaskCard.tsx";
import Column from "./components/Column.tsx";
import type {Task, NewTask} from './types/Task';
import NewTaskForm from "./components/NewTaskForm.tsx";
import {useState, useEffect} from "react";


const App = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [tasks, setTasks] = useState<Task[]>([]);

    const filteredTasks = tasks.filter((task) => {
        const query = searchQuery.toLowerCase().trim();
        return (
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query) ||
            task.assignee.toLowerCase().includes(query) ||
            task.category.toLowerCase().includes(query) ||
            task.priority.toLowerCase().includes(query)
        );
    })
    const todoTasks = filteredTasks.filter((task) => task.status === "Att göra");
    const inProgressTasks = filteredTasks.filter((task) => task.status === "Pågår");
    const doneTasks = filteredTasks.filter((task) => task.status === "Klart");

    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/tasks");
            if (!response.ok) {
                throw new Error("Kunde inte hämta tasks:");
            }
            const data: Task[] = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Fel vid hämtning av tasks:", error);
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddTask = async (newTask: NewTask) => {
        try {
            const response = await fetch("http://localhost:3001/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            });
            if (!response.ok) {
                throw new Error("Kunde inte skapa task");
            }
            await fetchTasks();
        } catch (error) {
            console.error("Fel vid skapande av task:", error);
        }
    };

    return (
        <div>
            <Header/>
            <NewTaskForm onAddTask={handleAddTask}/>

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
            <Footer/>
        </div>

    );
}
export default App;