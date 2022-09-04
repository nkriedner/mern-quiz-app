import { useAuthContext } from "./useAuthContext";
import { useQuizdataContext } from "./useQuizdataContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: quizdataDispatch } = useQuizdataContext();

    const logout = () => {
        // Remove user from local storage:
        localStorage.removeItem("user");

        // dispatch logout action
        dispatch({ type: "LOGOUT" });
        quizdataDispatch({ type: "SET_QUIZDATA", payload: null });
    };

    return { logout };
};
