import React, { forwardRef } from "react";
import useModal from "../../Hooks/useModal";
import "../../styles/Modal.css";

const Detail = forwardRef(({ selectedItem, onClick }, ref) => {
    if (!selectedItem) return null;
    const { closeModal } = useModal();

    return (
        <div className="modal-container-detail">
            <div className="modal-content-detail">
                <h3>연락처 상세 정보</h3>
                <div className="content-detail">이름 : {selectedItem.name}</div>
                <div className="content-detail">
                    전화번호 : {selectedItem.phone}
                </div>
                <div className="content-detail">
                    그룹 : {selectedItem.group}
                </div>
                <div className="content-detail">
                    간단한 메모 : {selectedItem.desc}
                </div>
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

export default Detail;
