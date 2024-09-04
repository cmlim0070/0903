import React, { createContext, useState } from "react";

export const ModalStateContext = React.createContext();
export const ModalSetterContext = React.createContext();

export default function ModalProvider({ children }) {
    const [modalState, setModalState] = useState({
        type: null, //모달 종류
        props: null,
    });

    return (
        <ModalSetterContext.Provider value={setModalState}>
            <ModalStateContext.Provider value={modalState}>
                {children}
            </ModalStateContext.Provider>
        </ModalSetterContext.Provider>
    );
}
