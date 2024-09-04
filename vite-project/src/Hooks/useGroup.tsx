import { useContext } from "react";
import {
    GroupStateContext,
    GroupDispatchContext,
} from "../context/GroupProvider";

export function useGroupState() {
    const context = useContext(GroupStateContext);
    if (!context) {
        throw new Error("err");
    }
    return context;
}

export function useGroupDispatch() {
    const context = useContext(GroupDispatchContext);
    if (!context) {
        throw new Error("err");
    }
    return context;
}

export function useGroup() {
    const state = useGroupState();
    const dispatch = useGroupDispatch();
    return { state, dispatch };
}
