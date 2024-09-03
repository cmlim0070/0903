import React, { forwardRef } from "react";
import "../../styles/Modal.css";

const Detail = forwardRef(({ selectedItem, onClick }, ref) => {
    if (!selectedItem) return null;

    console.log(selectedItem);
    return (
        <div className="modal-container" ref={ref} onClick={onClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
            </div>
        </div>
    );
});

export default Detail;
