import type { ReactNode } from "react";
type ColumnProps = {
    title: string;
    children?: ReactNode;
}
const Column = ({ title, children }: ColumnProps) => {
    return (
        <section className={"column"}>
            <h2>{title}</h2>
            {children}
        </section>
    );
};
export default Column;