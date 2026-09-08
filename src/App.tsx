import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import TaskCard from "./components/TaskCard.tsx";
import Column from "./components/Column.tsx";
import type {Task, NewTask} from './types/Task';
import NewTaskForm from "./components/NewTaskForm.tsx";
import {useState} from "react";

const initialTasks: Task[] = [
    // Att göra
    {
        id: 1,
        title: "Dammsuga köket",
        description: "Plocka lösa föremål och dammsuga golv och lister",
        assignee: "Anna",
        priority: "Hög",
        category: "Städning",
        status: "Att göra",
    },
    {
        id: 4,
        title: "Boka tvättid",
        description: "Boka tid i tvättstugan inför helgen",
        assignee: "Kalle",
        priority: "Låg",
        category: "Hushåll",
        status: "Att göra",
    },
    {
        id: 5,
        title: "Rensa kylskåpet",
        description: "Kasta utgången mat och torka av hyllorna",
        assignee: "Lisa",
        priority: "Medium",
        category: "Städning",
        status: "Att göra",
    },
    // Pågår
    {
        id: 2,
        title: "Ta ut sopor",
        description: "Ta ut hushållsavfall och återvinning",
        assignee: "Kalle",
        priority: "Medium",
        category: "Städning",
        status: "Pågår",
    },
    {
        id: 6,
        title: "Laga middag",
        description: "Förbereda ingredienser och tillaga gryta",
        assignee: "Anna",
        priority: "Hög",
        category: "Matlagning",
        status: "Pågår",
    },
    {
        id: 7,
        title: "Vattna blommorna",
        description: "Vattna växterna i vardagsrummet och balkongen",
        assignee: "Lisa",
        priority: "Låg",
        category: "Trädgård",
        status: "Pågår",
    },
    // Klart
    {
        id: 3,
        title: "Handla mat",
        description: "Åka till affären och handla livsmedel",
        assignee: "Lisa",
        priority: "Låg",
        category: "Ärenden",
        status: "Klart",
    },
    {
        id: 8,
        title: "Betala räkningar",
        description: "Gå igenom månadens fakturor och signera",
        assignee: "Kalle",
        priority: "Hög",
        category: "Ekonomi",
        status: "Klart",
    },
    {
        id: 9,
        title: "Bädda rent i sängen",
        description: "Byta lakan, påslakan och örngott",
        assignee: "Anna",
        priority: "Medium",
        category: "Städning",
        status: "Klart",
    },
];

const App = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [nextId, setNextId] = useState<number>(10);

    const filteredTasks = tasks.filter((task) => {
        const query = searchQuery.toLowerCase().trim();
        return (
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query) ||
            task.assignee.toLowerCase().includes(query) ||
            task.priority.toLowerCase().includes(query)
        );
    })
    const todoTasks = filteredTasks.filter((task) => task.status === "Att göra");
    const inProgressTasks = filteredTasks.filter((task) => task.status === "Pågår");
    const doneTasks = filteredTasks.filter((task) => task.status === "Klart");

    const handleAddTask = (newTask: NewTask) => {
        const task: Task = {
            id: nextId,
            status: "Att göra",
            ...newTask,
        };
        setNextId(task.id + 1);
        setTasks([...tasks, task]);
    }

    return (
        <div>
            <Header/>
            <NewTaskForm onAddTask={handleAddTask}/>

            <div className={"max-w-lg mx-auto mb-8 px-4"}>
                <label htmlFor={"search"} className={"block text-sm font-medium text-slate-300 mb-1"}>Sök uppgifter</label>
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