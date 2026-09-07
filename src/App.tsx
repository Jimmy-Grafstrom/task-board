import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import TaskCard from "./components/TaskCard.tsx";
import Column from "./components/Column.tsx";
import type { Task } from './types/Task';
import NewTaskForm from "./components/NewTaskForm.tsx";

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

    const todoTasks = initialTasks.filter((task) => task.status === "Att göra");
    const inProgressTasks = initialTasks.filter((task) => task.status === "Pågår");
    const doneTasks = initialTasks.filter((task) => task.status === "Klart");

    return (
        <div>
            <Header/>
            <NewTaskForm/>

            <main className={"board"}>
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
                            priority={task.priority} />
                    ))}
                </Column>
            </main>
            <Footer/>
        </div>

    );
}
export default App;