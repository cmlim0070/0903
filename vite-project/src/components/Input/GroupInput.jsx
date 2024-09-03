import { useState } from "react";

export default function GroupInput({ onChangeGroup }) {
    const selectList = [
        { value: "가족", name: "가족" },
        { value: "친구", name: "친구" },
        { value: "직장", name: "직장" },
        { value: "스터디", name: "스터디" },
    ];

    const [selected, setSelected] = useState("가족");

    const handleSelect = (e) => {
        const newValue = e.target.value;
        setSelected(newValue);
        onChangeGroup(newValue);
    };

    return (
        <div className="inputLine">
            <label htmlFor="name">그룹</label>
            <select onChange={handleSelect} value={selected}>
                {selectList.map((item) => (
                    <option value={item.value} key={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>
            <button type="button" className="group_add_btn">
                그룹추가
            </button>
        </div>
    );
}
