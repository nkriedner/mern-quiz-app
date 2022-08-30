import { useState } from "react";

const QuizdataForm = () => {
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer1, setNewAnswer1] = useState("");
    const [newAnswer2, setNewAnswer2] = useState("");
    const [newAnswer3, setNewAnswer3] = useState("");
    const [newAnswer4, setNewAnswer4] = useState("");
    const [newSolution, setNewSolution] = useState("");

    return (
        <div>
            <h2>Add New Quizdata:</h2>
            <form>
                <textarea
                    onChange={(e) => setNewQuestion(e.target.value)}
                    value={newQuestion}
                    placeholder="Question"
                ></textarea>
                <textarea
                    onChange={(e) => setNewAnswer1(e.target.value)}
                    value={newAnswer1}
                    placeholder="Answer 1"
                ></textarea>
                <textarea
                    onChange={(e) => setNewAnswer2(e.target.value)}
                    value={newAnswer2}
                    placeholder="Answer 2"
                ></textarea>
                <textarea
                    onChange={(e) => setNewAnswer3(e.target.value)}
                    value={newAnswer3}
                    placeholder="Answer 3"
                ></textarea>
                <textarea
                    onChange={(e) => setNewAnswer4(e.target.value)}
                    value={newAnswer4}
                    placeholder="Answer 4"
                ></textarea>
                <textarea
                    onChange={(e) => setNewSolution(e.target.value)}
                    value={newSolution}
                    placeholder="Solution"
                ></textarea>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default QuizdataForm;
