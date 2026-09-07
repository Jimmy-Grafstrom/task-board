import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import Column from "../components/Column.tsx";

describe("Column", () => {
    it('renderar titel och child-element', () => {
        render(
            <Column title={"Test Column"}>
                <p>Child element</p>
            </Column>
        );
        expect(screen.getByRole("heading", { level: 2, name: "Test Column" })).toBeInTheDocument();
        expect(screen.getByText("Child element")).toBeInTheDocument();
    });
})