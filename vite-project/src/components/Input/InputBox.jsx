// TextInput, GroupInput, SubmitButton로 컴포넌트 분리

import { useState, useRef } from "react";
import GroupInput from "./GroupInput";
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import "../../styles/Input.css";

export default function InputBox({ onAddItem }) {
    const inputRefs = useRef({});
    const [values, setValues] = useState({
        name: "",
        phone: "",
        group: "가족",
        desc: "",
    });
    const { name, phone, group, desc } = values;

    const validationPatterns = {
        name: /^[\uac00-\ud7af]{2,}$/,
        phone: /^010-\d{4}-\d{4}$/,
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const getSelected = (newItem) => {
        setValues({
            ...values,
            group: newItem,
        });
    };

    const handleClick = () => {
        if (!validationPatterns.name.test(name)) {
            alert("유효하지 않은 이름 입니다.");
            setValues((prev) => ({
                ...prev,
                name: "",
            }));
            inputRefs.current.name.focus();
        } else if (!validationPatterns.phone.test(phone)) {
            alert("유효하지 않은 전화번호 입니다.");
            setValues((prev) => ({
                ...prev,
                phone: "",
            }));
            inputRefs.current.phone.focus();
        } else {
            onAddItem(values);
        }
    };

    return (
        <form className="inputBox">
            <TextInput
                label="이름"
                id="name"
                name="name"
                onChange={handleChange}
                ref={(el) => (inputRefs.current.name = el)}
            />
            <TextInput
                label="전화번호"
                id="phone"
                name="phone"
                onChange={handleChange}
                ref={(el) => (inputRefs.current.phone = el)}
            />
            <GroupInput onChangeGroup={getSelected} />
            <TextInput
                label="간단한메모"
                id="desc"
                name="desc"
                onChange={handleChange}
                ref={(el) => (inputRefs.current.desc = el)}
            />
            <SubmitButton onClick={handleClick} />
        </form>
    );
}
