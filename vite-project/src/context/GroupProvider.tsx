import React, { createContext, useState } from "react";

export const GroupStateContext = React.createContext();
export const GroupDispatchContext = React.createContext();

export default function GroupProvider({ children }) {
    const [groupItems, setGroupItems] = useState([
        { value: "미분류", name: "미분류" },
        { value: "가족", name: "가족" },
        { value: "친구", name: "친구" },
        { value: "직장", name: "직장" },
        { value: "스터디", name: "스터디" },
    ]);

    const deleteGroup = (targetItem) => {
        setGroupItems((prevItems) =>
            prevItems.filter((item) => item.value !== targetItem)
        );
    };

    const CreateGroup = (targetItem) => {
        if (targetItem.trim() === "") {
            alert("빈 값은 그룹명으로 사용할 수 없습니다.");
            return;
        }
        setGroupItems((prevItems) => [
            ...prevItems,
            { value: targetItem, name: targetItem },
        ]);
    };

    return (
        <GroupStateContext.Provider value={groupItems}>
            <GroupDispatchContext.Provider value={{ deleteGroup, CreateGroup }}>
                {children}
            </GroupDispatchContext.Provider>
        </GroupStateContext.Provider>
    );
}
