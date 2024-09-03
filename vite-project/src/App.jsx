import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./App.css";
import Search from "./components/Search/Search";
import InputBox from "./components/Input/InputBox";

function App() {
    const [items, setItems] = useState([]);

    const addItems = (newItem) => {
        setItems((prevItem) => [...prevItem, newItem]);
        console.log("리스트 업데이트", newItem);
    };

    return (
        <>
            <Header />
            <section>
                <div className="leftCon">
                    <InputBox onAddItem={addItems} />
                </div>
                <div className="rightCon">
                    <Search />
                    <List items={items} />
                </div>
            </section>
        </>
    );
}

export default App;
