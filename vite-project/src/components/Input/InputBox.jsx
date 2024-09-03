// TextInput, GroupInput, SubmitButton로 컴포넌트 분리

import { useState } from "react";
import GroupInput from "./GroupInput";
import "../../styles/Input.css";

export default function InputBox() {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        group: "",
        desc: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(value);
    };

    return (
        <form className="inputBox">
            <div className="inputLine">
                <label htmlFor="name">이름</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
            </div>
            <div className="inputLine">
                <label htmlFor="name">전화번호</label>
                <input
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="inputLine">
                <label htmlFor="name">그룹</label>
                <GroupInput />
                <button type="button" className="group_add_btn">
                    그룹추가
                </button>
            </div>
            <div className="inputLine">
                <label htmlFor="name">간단한기록</label>
                <input
                    type="text"
                    name="group"
                    value={values.group}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="input_submit_btn">
                저장
            </button>
        </form>
    );
}
