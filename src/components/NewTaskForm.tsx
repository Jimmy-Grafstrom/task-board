import { useState } from "react";
import type { Priority } from "../types/Task.ts";
import * as React from "react";

const labelClasses = "block text-sm font-medium text-slate-300 mb-1";
const inputClasses = "block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";
const generalFormStyle = "max-w-lg mx-auto my-8 p-4 bg-slate-800 border border-slate-700 rounded-xl shadow-lg flex flex-col gap-4 text-slate-100"
const h2Style = "text-xl font-bold text-white"

const NewTaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState<Priority>('Medium');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Ny task skapad:", {
            title,
            description,
            assignee,
            category,
            priority,
        });

        setTitle("");
        setDescription("");
        setAssignee("");
        setCategory("");
        setPriority('Medium');
    };

    return (
        <form onSubmit={handleSubmit} className={generalFormStyle}>
            <h2 className={h2Style}>Skapa ny uppgift</h2>

            <div>
                <label htmlFor="title" className={labelClasses}>Titel</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="T.ex. Dammsuga köket"
                    className={inputClasses}
                />
            </div>

            <div>
                <label htmlFor="description" className={labelClasses}>Beskrivning</label>
                <textarea
                    id="description"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Beskriv uppgiften..."
                    className={inputClasses}
                />
            </div>

                <div>
                    <label htmlFor="assignee" className={labelClasses}>Ansvarig</label>
                    <input
                        id="assignee"
                        type="text"
                        value={assignee}
                        onChange={(e) => setAssignee(e.target.value)}
                        required
                        placeholder="T.ex. Anna"
                        className={inputClasses}
                    />
                </div>

                <div>
                    <label htmlFor="category" className={labelClasses}>Kategori</label>
                    <input
                        id="category"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        placeholder="T.ex. Städning"
                        className={inputClasses}
                    />
                </div>

            <div>
                <label htmlFor="priority" className={labelClasses}>Prioritet</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    className={inputClasses}
                >
                    <option value="Hög">Hög</option>
                    <option value="Medium">Medium</option>
                    <option value="Låg">Låg</option>
                </select>
            </div>

            <button
                type="submit"
                className="mt-2 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors cursor-pointer"
            >
                Skapa task
            </button>
        </form>
    );
};

export default NewTaskForm;