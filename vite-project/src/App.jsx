import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./App.css";
import Search from "./components/Search/Search";
import InputBox from "./components/Input/InputBox";

function App() {
    const [items, setItems] = useState([]);

    const testData = [
        {
            name: "임채민",
            phone: "010-1234-1234",
            group: "가족",
            desc: "1",
        },
        {
            name: "임재현",
            phone: "010-1234-1234",
            group: "가족",
            desc: "3",
        },
        {
            name: "임세영",
            phone: "010-1234-1234",
            group: "가족",
            desc: "4",
        },
    ];

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
                    <List itemList={testData} />
                </div>
            </section>
        </>
    );
}

export default App;
