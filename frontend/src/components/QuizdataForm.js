import { useState } from "react";
import { useQuizdataContext } from "../hooks/useQuizdataContext";

const QuizdataForm = () => {
    const { dispatch } = useQuizdataContext(); // destructures the dispatch function
    const [newCategory, setNewCategory] = useState("");
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer1, setNewAnswer1] = useState("");
    const [newAnswer2, setNewAnswer2] = useState("");
    const [newAnswer3, setNewAnswer3] = useState("");
    const [newAnswer4, setNewAnswer4] = useState("");
    const [newSolution, setNewSolution] = useState("");
    const [error, setError] = useState(null);

    // Function for handling the form submission:
    const handleSubmit = async (e) => {
        e.preventDefault(); // prevents the default page reload on form submisstions

        const newQuizdata = {
            category: newCategory,
            question: newQuestion,
            answer1: newAnswer1,
            answer2: newAnswer2,
            answer3: newAnswer3,
            answer4: newAnswer4,
            solution: newSolution,
        };
        console.log("newQuizdata:", newQuizdata);

        // Send the new quizdata with post request:
        const response = await fetch("/api/quizdata", {
            method: "POST",
            body: JSON.stringify(newQuizdata),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        // Check if the post request was ok:
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setNewQuestion("");
            setNewQuestion("");
            setNewAnswer1("");
            setNewAnswer2("");
            setNewAnswer3("");
            setNewAnswer4("");
            setNewSolution("");
            setError(null);
            console.log("New quizdata added to database.");
            dispatch({ type: "CREATE_QUIZDATA", payload: json });
        }
    };

    return (
        <div>
            <h2>Add New Quizdata:</h2>
            <form onSubmit={handleSubmit}>
                <textarea onChange={(e) => setNewCategory(e.target.value)} value={newCategory} placeholder="Category" />
                <textarea onChange={(e) => setNewQuestion(e.target.value)} value={newQuestion} placeholder="Question" />
                <textarea onChange={(e) => setNewAnswer1(e.target.value)} value={newAnswer1} placeholder="Answer 1" />
                <textarea onChange={(e) => setNewAnswer2(e.target.value)} value={newAnswer2} placeholder="Answer 2" />
                <textarea onChange={(e) => setNewAnswer3(e.target.value)} value={newAnswer3} placeholder="Answer 3" />
                <textarea onChange={(e) => setNewAnswer4(e.target.value)} value={newAnswer4} placeholder="Answer 4" />
                <textarea onChange={(e) => setNewSolution(e.target.value)} value={newSolution} placeholder="Solution" />

                <button className="btn">Submit</button>
                {/* Display error message if there is one: */}
                {error && <div className="error-box">{error}</div>}
            </form>
        </div>
    );
};

export default QuizdataForm;
