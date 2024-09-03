import { useState } from "react";

export default function GroupInput() {
    const selectList = [
        { value: "가족", name: "가족" },
        { value: "친구", name: "친구" },
        { value: "직장", name: "직장" },
        { value: "스터디", name: "스터디" },
    ];

    const [selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    return (
        <select onChange={handleSelect} value={selected}>
            {selectList.map((item) => (
                <option value={item.value} key={item.value}>
                    {item.name}
                </option>
            ))}
        </select>
    );
}
