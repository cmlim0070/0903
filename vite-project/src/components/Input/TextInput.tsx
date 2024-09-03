import React from "react";

function TextInput({ label, name, value, onChange }) {
    return (
        <div className="inputLine">
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} value={value} onChange={onChange} />
        </div>
    );
}

export default TextInput;
