import { useState } from "react";
import type { Priority} from "../types/Task.ts";
import * as React from "react";

const NewTaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState<Priority>('Medium')
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
        <form onSubmit={handleSubmit} className={"new-task-form"}>
            <h2>Skapa ny uppgift</h2>

            <div>
                <label htmlFor="title">Title</label>
                <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </div>

            <div>
                <label htmlFor="description">Beskrivning</label>
                <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </div>

            <div>
                <label htmlFor="assignee">Ansvarig</label>
                <input
                id="assignee"
                type="text"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                required
                />
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                />
            </div>

            <div>
                <label htmlFor="priority">Prioritet</label>
                <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
                >
                    <option value="Hög">Hög</option>
                    <option value="Medium">Medium</option>
                    <option value="Låg">Låg</option>
                </select>
            </div>

            <button type="submit">Skapa task</button>
        </form>
    )
}
export default NewTaskForm;