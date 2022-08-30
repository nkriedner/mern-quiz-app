import { createContext, useReducer } from "react"; // imports the createContext function

// Create a React Context for the quizdata:
export const QuizdataContext = createContext();

export const quizdataReducer = (state, action) => {
    switch (action.type) {
        case "SET_QUIZDATA":
            return {
                quizdata: action.payload,
            };
        case "CREATE_QUIZDATA":
            return {
                quizdata: [action.payload, ...state.quizdata],
            };
        default:
            return state;
    }
};

export const QuizdataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(quizdataReducer, {
        quizdata: null,
    });

    return <QuizdataContext.Provider value={{ ...state, dispatch }}>{children}</QuizdataContext.Provider>;
};
