import { useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./App.css";
import Search from "./components/Search/Search";
import InputBox from "./components/Input/InputBox";
import EmptyList from "./components/List/EmptyList";

function App() {
    const [items, setItems] = useState([]);

    const [userInput, setUserInput] = useState("");

    const addItems = (newItem) => {
        setItems((prevItem) => [...prevItem, newItem]);
    };

    const deleteItems = (targetItem) => {
        setItems((prevItem) => prevItem.filter((item) => item !== targetItem));
    };

    const filterList = (input) => {
        setUserInput(input);
    };

    const filteredItems = userInput
        ? items.filter(
              (item) =>
                  item.name.toLowerCase().includes(userInput) ||
                  item.phone.includes(userInput) ||
                  item.group.toLowerCase().includes(userInput)
          )
        : items;

    return (
        <>
            <Header />
            <section>
                <div className="leftCon">
                    <InputBox onAddItem={addItems} />
                </div>
                <div className="rightCon">
                    <Search filterList={filterList} />
                    {filteredItems.length > 0 ? (
                        <List
                            itemList={filteredItems}
                            onDeleteItem={deleteItems}
                        />
                    ) : (
                        <EmptyList />
                    )}
                </div>
            </section>
        </>
    );
}

export default App;
