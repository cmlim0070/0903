import { useState, useRef } from "react";
import Detail from "./../Modal/Detail";
import useModal from "../../Hooks/useModal";

import "../../styles/List.css";

export default function List({ itemList, onDeleteItem }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const { openModal } = useModal();

    const handleClick = (item) => {
        setSelectedItem(item);
        openModal({ type: "Detail", props: { selectedItem: item } });
    };

    return (
        <ul className="listCon">
            {itemList.map((item) => (
                <li className="listItem">
                    {item.name} {item.phone} {item.group}
                    <div className="listBtn">
                        <button
                            type="button"
                            className="show_detail_btn"
                            onClick={() => handleClick(item)}
                        >
                            세부사항
                        </button>
                        <button
                            type="button"
                            className="item_delete_btn"
                            onClick={() => onDeleteItem(item)}
                        >
                            삭제
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
