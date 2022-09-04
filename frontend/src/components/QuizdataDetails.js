import { useQuizdataContext } from "../hooks/useQuizdataContext";
import { useAuthContext } from "../hooks/useAuthContext";

const QuizdataDetails = ({ quizdata }) => {
    const { dispatch } = useQuizdataContext(); // to use the dispatch function
    const { user } = useAuthContext();

    const handleClick = async () => {
        if (!user) {
            return;
        }

        const response = await fetch("/api/quizdata/" + quizdata._id, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_QUIZDATA", payload: json });
        }
    };

    return (
        <div className="quizdata-card">
            <h3>Question: {quizdata.question}</h3>
            <p>Answer 1: {quizdata.answer1}</p>
            <p>Answer 2: {quizdata.answer2}</p>
            <p>Answer 3: {quizdata.answer3}</p>
            <p>Answer 4: {quizdata.answer4}</p>
            <p>Solution: {quizdata.solution}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    );
};

export default QuizdataDetails;
