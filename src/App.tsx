import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import type {NewTask, Task} from './types/Task';
import {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router";
import TaskBoardPage from "./pages/TaskBoardPage.tsx";
import CreateTaskPage from "./pages/CreateTaskPage.tsx";


const App = () => {

    const [tasks, setTasks] = useState<Task[]>([]);


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
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
            <Header />

            <nav className="flex justify-center gap-4 my-6">
                <Link
                    to="/"
                    className="px-4 py-2 rounded-lg border active:bg-blue-600 border-slate-700 hover:bg-slate-700 text-white font-medium transition-colors"
                >
                    Tavla</Link>
                <Link
                    to="/create"
                    className="px-4 py-2 rounded-lg border border-slate-700 active:bg-blue-600 hover:bg-slate-700 text-white font-medium transition-colors">
                    Skapa uppgift</Link>
            </nav>

            {/* Vy-routing */}
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<TaskBoardPage tasks={tasks} />} />
                    <Route path="/create" element={<CreateTaskPage onAddTask={handleAddTask} />} />
                </Routes>
            </div>

            <Footer/>
        </div>

    );
}
export default App;