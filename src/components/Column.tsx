import type {ReactNode} from "react";
type ColumnProps = {
    title: string;
    children?: ReactNode;
}
const Column = ({title, children}: ColumnProps) => {
    return (
        <section className="bg-slate-800/80 border border-slate-700/80
  rounded-xl p-4 flex flex-col gap-4 text-left shadow-md">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <div className="flex flex-col gap-3">
                {children}
            </div>
        </section>
    );
};
export default Column;