import React, { forwardRef } from "react";

const TextInput = forwardRef(({ label, name, id, onChange }, ref) => {
    return (
        <div className="inputLine">
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={name}
                placeholder={label}
                onChange={onChange}
                ref={ref}
            />
        </div>
    );
});

export default TextInput;
