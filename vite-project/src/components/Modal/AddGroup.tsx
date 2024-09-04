import React, { forwardRef, useContext, useState } from "react";
import {
    GroupStateContext,
    GroupDispatchContext,
} from "../../context/GroupProvider";
import useModal from "../../Hooks/useModal";
import "../../styles/Modal.css";

const AddGroup = forwardRef((props, ref) => {
    const [values, setValues] = useState("");

    const groupItems = useContext(GroupStateContext);
    const { deleteGroup, CreateGroup } = useContext(GroupDispatchContext);

    const { closeModal } = useModal();

    const handleDelete = (itemValue) => {
        deleteGroup(itemValue);
    };

    const handleCreate = () => {
        CreateGroup(values);
    };

    const handleChange = (e) => {
        setValues(e.target.value);
    };

    return (
        <div className="modal-container-group">
            <div className="modal-content-group">
                <h3>그룹 관리</h3>
                <ul className="grouplist-container">
                    {groupItems.map((item) => (
                        <li className="grouplist">
                            {item.value}
                            <button
                                type="button"
                                className="item_delete_btn"
                                onClick={() => handleDelete(item.value)}
                            >
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="newGroup-input">
                    <input
                        type="text"
                        id="newGroup"
                        name="newGroup"
                        placeholder="새로운 그룹"
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="group_submit_btn"
                        onClick={handleCreate}
                    >
                        추가
                    </button>
                </div>
                <label htmlFor="newGroup"></label>
                <button
                    type="button"
                    className="modal_close_btn"
                    onClick={closeModal}
                >
                    닫기
                </button>
            </div>
        </div>
    );
});

export default AddGroup;
