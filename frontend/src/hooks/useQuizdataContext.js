import { QuizdataContext } from "../context/QuizdataContext";
import { useContext } from "react";

export const useQuizdataContext = () => {
    const context = useContext(QuizdataContext);

    if (!context) {
        throw Error("useQuizdataContext must be inside a QuizdataContextProvider");
    }

    return context;
};
