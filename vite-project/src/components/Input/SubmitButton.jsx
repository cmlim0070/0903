import React from "react";

const SubmitButton = ({ onClick }) => {
    return (
        <button type="button" className="input_submit_btn" onClick={onClick}>
            저장
        </button>
    );
};

export default SubmitButton;
