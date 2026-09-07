import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import Header from "../components/Header.tsx";

describe('Header', () => {
    it('renderar huvudrubrik', () => {
        render(<Header />);

        const headingElement = screen.getByRole("heading", { level: 1, name: /task board/i })
        expect(headingElement).toBeInTheDocument()
    })

    it('renderar introtext', () => {
        render(<Header />);
        const descriptionElement = screen.getByText('Hantera och följ pågående uppgifter')
        expect(descriptionElement).toBeInTheDocument()
    })
});