import React, { useContext } from "react";
import { createPortal } from "react-dom";

import useModal from "../../Hooks/useModal";
import Detail from "./Detail";
import AddGroup from "./AddGroup";
import { ModalStateContext } from "../../context/ModalProvider";

export default function ModalContainer() {
    const { type, props } = useContext(ModalStateContext);

    if (!type) return null;

    const ModalComponent = () => {
        switch (type) {
            case "Detail":
                return <Detail {...props} />;
            case "AddGroup":
                return <AddGroup {...props} />;
            default:
                return null;
        }
    };

    return createPortal(
        <ModalComponent />,
        document.getElementById("modal-root")
    );
}
