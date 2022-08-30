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
        case "DELETE_QUIZDATA":
            return {
                quizdata: state.quizdata.filter((data) => data._id !== action.payload._id), // keeps all quizdata that does not equal the id to delete
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
