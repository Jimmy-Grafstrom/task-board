import type {NewTask} from "../types/Task.ts";
import {useNavigate} from "react-router";
import NewTaskForm from "../components/NewTaskForm.tsx";

type CreateTaskPageProps = {
    onAddTask: (task: NewTask) => Promise<void>;
};

const CreateTaskPage = ({ onAddTask }: CreateTaskPageProps) => {
    const navigate = useNavigate();

    const executeTask = async (newTask: NewTask) => {
        await onAddTask(newTask);
        navigate("/");
    };
    return (
        <div>
            <NewTaskForm onAddTask={executeTask} />
        </div>
    );
};
export default CreateTaskPage;