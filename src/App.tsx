import "./App.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import TaskCard from "./components/TaskCard.tsx";
import Column from "./components/Column.tsx";

const App = () => {
    return (
        <div>
            <Header/>
            <main className={"board"}>
                <Column title="Att göra">
                    <TaskCard
                    id={1}
                    title={"Dammsuga köket"}
                    description={"Plocka lösa föremål och dammsuga golv och lister"}
                    assignee={"Anna"}
                    status={"Hög"}
                    category={"Städning"}
                    />
                </Column>

                <Column title="Pågår">
                    <TaskCard
                        id={2}
                        title={"Ta ut sopor"}
                        description={"Ta ut hushållsavfall och återvinning"}
                        assignee={"Kalle"}
                        status={"Medium"}
                        category={"Städning"}
                    />
                </Column>
                <Column title="Klart">
                    <TaskCard
                        id={3}
                        title={"Handla mat"}
                        description={"Åka till affären och handla livsmedel"}
                        assignee={"Lisa"}
                        status={"Låg"}
                        category={"Ärenden"}
                    />
                </Column>
            </main>
            <Footer/>
        </div>

    );
}
export default App;