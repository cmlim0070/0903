import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./App.css";
import Search from "./components/Search/Search";
import InputBox from "./components/Input/InputBox";
import EmptyList from "./components/List/EmptyList";

function App() {
    const [items, setItems] = useState([]);

    // 테스트 데이터
    const testData = [
        {
            name: "홍길동",
            phone: "010-1234-1234",
            group: "가족",
            desc: "1",
        },
        {
            name: "고주몽",
            phone: "010-1234-1234",
            group: "가족",
            desc: "3",
        },
        {
            name: "박혁거세",
            phone: "010-1234-1234",
            group: "가족",
            desc: "4",
        },
    ];

    const addItems = (newItem) => {
        setItems((prevItem) => [...prevItem, newItem]);
    };

    const deleteItems = (targetItem) => {
        setItems((prevItem) => prevItem.filter((item) => item !== targetItem));
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
                    {items.length > 0 ? (
                        <List itemList={items} onDeleteItem={deleteItems} />
                    ) : (
                        <EmptyList />
                    )}
                </div>
            </section>
        </>
    );
}

export default App;
