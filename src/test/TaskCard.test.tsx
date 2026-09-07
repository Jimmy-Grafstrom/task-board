import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import TaskCard from "../components/TaskCard.tsx";

describe('TaskCard', () => {
    const mockTask = {
        id: 1,
        title: "test",
        description: "test description",
        assignee: "test assignee",
        priority: "Hög" as const,
        category: "test category",
    }

    it ('visar alla uppgifter via props', () => {
        render(<TaskCard {...mockTask} />);
        expect(screen.getByText(`ID: ${mockTask.id}`)).toBeInTheDocument();
        expect(screen.getByRole("heading", { level: 3, name: mockTask.title })).toBeInTheDocument();
        expect(screen.getByText(mockTask.description)).toBeInTheDocument();
        expect(screen.getByText(`Ansvarig: ${mockTask.assignee}`)).toBeInTheDocument()
        expect(screen.getByText(mockTask.priority)).toBeInTheDocument()
        expect(screen.getByText(mockTask.category)).toBeInTheDocument()
    })
})