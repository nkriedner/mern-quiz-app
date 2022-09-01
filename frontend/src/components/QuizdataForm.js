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
    const [emptyfields, setEmptyFields] = useState([]);

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
            console.log("json:", json);
            console.log("json.emptyfields:", json.emptyFields);
            console.log("json.error:", json.error);
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setNewCategory("");
            setNewQuestion("");
            setNewQuestion("");
            setNewAnswer1("");
            setNewAnswer2("");
            setNewAnswer3("");
            setNewAnswer4("");
            setNewSolution("");
            setError(null);
            setEmptyFields([]);
            console.log("New quizdata added to database.");
            dispatch({ type: "CREATE_QUIZDATA", payload: json });
        }
    };

    return (
        <div>
            <h2>Add New Quizdata:</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    className={emptyfields && emptyfields.includes("category") ? "emptyfield-error" : ""}
                    onChange={(e) => setNewCategory(e.target.value)}
                    value={newCategory}
                    placeholder="Category"
                />
                <textarea
                    className={emptyfields && emptyfields.includes("question") ? "emptyfield-error" : ""}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    value={newQuestion}
                    placeholder="Question"
                />
                <textarea
                    className={emptyfields && emptyfields.includes("answer 1") ? "emptyfield-error" : ""}
                    onChange={(e) => setNewAnswer1(e.target.value)}
                    value={newAnswer1}
                    placeholder="Answer 1"
                />
                <textarea
                    className={emptyfields && emptyfields.includes("answer 2") ? "emptyfield-error" : ""}
                    onChange={(e) => setNewAnswer2(e.target.value)}
                    value={newAnswer2}
                    placeholder="Answer 2"
                />
                <textarea
                    className={emptyfields && emptyfields.includes("answer 3") ? "emptyfield-error" : ""}
                    onChange={(e) => setNewAnswer3(e.target.value)}
                    value={newAnswer3}
                    placeholder="Answer 3"
                />
                <textarea
                    className={emptyfields && emptyfields.includes("answer 4") ? "emptyfield-error" : ""}
                    onChange={(e) => setNewAnswer4(e.target.value)}
                    value={newAnswer4}
                    placeholder="Answer 4"
                />
                <textarea
                    className={emptyfields && emptyfields.includes("solution") ? "emptyfield-error" : ""}
                    onChange={(e) => setNewSolution(e.target.value)}
                    value={newSolution}
                    placeholder="Solution"
                />

                <button className="btn">Submit</button>
                {/* Display error message if there is one: */}
                {error && <div className="error-box">{error}</div>}
            </form>
        </div>
    );
};

export default QuizdataForm;
