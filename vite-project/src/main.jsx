import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ModalProvider from "./context/ModalProvider.tsx";
import ModalContainer from "./components/Modal/ModalContainer";
import GroupProvider from "./context/GroupProvider.tsx";

createRoot(document.getElementById("root")).render(
    <GroupProvider>
        <ModalProvider>
            <App />
            <ModalContainer />
        </ModalProvider>
    </GroupProvider>
);
