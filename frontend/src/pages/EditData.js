import { useEffect } from "react";
import QuizdataForm from "../components/QuizdataForm";
import QuizdataDetails from "../components/QuizdataDetails";
import { useQuizdataContext } from "../hooks/useQuizdataContext";
import { useAuthContext } from "../hooks/useAuthContext";

const EditData = () => {
    const { quizdata, dispatch } = useQuizdataContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchAllQuizdata = async () => {
            const response = await fetch("/api/quizdata", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_QUIZDATA", payload: json });
            }
        };

        if (user) {
            fetchAllQuizdata();
        }
    }, [dispatch, user]);

    return (
        <div>
            <h1>Inside EditData component</h1>
            <QuizdataForm></QuizdataForm>
            <h2>Quizdata List</h2>
            {quizdata && quizdata.map((data) => <QuizdataDetails key={data._id} quizdata={data} />)}
        </div>
    );
};

export default EditData;
