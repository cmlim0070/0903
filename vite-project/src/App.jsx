import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./App.css";
import Search from "./components/Search/Search";
import InputBox from "./components/Input/InputBox";

function App() {
    const [contacts, setContacts] = useState("");

    return (
        <>
            <Header />
            <section>
                <div className="leftCon">
                    <InputBox />
                </div>
                <div className="rightCon">
                    <Search />
                    <List />
                </div>
            </section>
        </>
    );
}

export default App;
