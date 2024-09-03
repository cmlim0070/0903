import { useState, useRef } from "react";
import "../../styles/List.css";
import Detail from "./../Modal/Detail";

export default function List({ itemList }) {
    const [modalState, setModalState] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const onModalControl = (item) => {
        setSelectedItem(item);
        setModalState(true);
    };

    const modalBackground = useRef();

    const closeModal = (e) => {
        if (e.target === modalBackground.current) {
            setModalState(false);
        }
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
                            onClick={() => onModalControl(item)}
                        >
                            세부사항
                        </button>
                        <button type="button" className="item_delete_btn">
                            삭제
                        </button>
                    </div>
                </li>
            ))}
            {modalState && (
                <Detail
                    ref={modalBackground}
                    selectedItem={selectedItem}
                    onClick={closeModal}
                />
            )}
        </ul>
    );
}
