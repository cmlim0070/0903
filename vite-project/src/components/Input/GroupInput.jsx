import { useState, useContext } from "react";
import { GroupStateContext } from "../../context/GroupProvider";
import useModal from "../../Hooks/useModal";
import "../../styles/Input.css";

export default function GroupInput({ onChangeGroup }) {
    const selectList = useContext(GroupStateContext);

    const { openModal } = useModal();

    const [selected, setSelected] = useState("가족");

    const handleSelect = (e) => {
        const newValue = e.target.value;
        setSelected(newValue);
        onChangeGroup(newValue);
    };

    const handleClick = () => {
        openModal({ type: "AddGroup", props: { selectList } });
    };

    return (
        <div className="inputLine">
            <label htmlFor="name">그룹</label>
            <div className="inputGroupLine__right">
                <select onChange={handleSelect} value={selected}>
                    {selectList.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <button
                    type="button"
                    className="group_add_btn"
                    onClick={handleClick}
                >
                    그룹추가
                </button>
            </div>
        </div>
    );
}
