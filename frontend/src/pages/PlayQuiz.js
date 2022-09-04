import { useEffect, useState } from "react";
import { useQuizdataContext } from "../hooks/useQuizdataContext";
import { useAuthContext } from "../hooks/useAuthContext";

const PlayQuiz = () => {
    const { quizdata, dispatch } = useQuizdataContext();
    const { user } = useAuthContext();
    const [currentQuizdata, setCurrentQuizdata] = useState([]);
    const [currentSolution, setCurrentSolution] = useState("");
    const [correctGuesses, setCorrectGuesses] = useState(0);
    const [falseGuesses, setFalseGuesses] = useState(0);
    const [openForAnswers, setOpenForAnswers] = useState(true);

    const answerDisplays = document.querySelectorAll(".answer");

    useEffect(() => {
        const fetchAllQuizdata = async (req, res) => {
            const response = await fetch("/api/quizdata", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_QUIZDATA", payload: json });
            }

            getRandomQuizdata(json);
        };

        if (user) {
            fetchAllQuizdata();
        }
    }, [dispatch, user]);

    const getRandomQuizdata = (quizdataArray) => {
        const randomNumber = Math.floor(Math.random() * quizdataArray.length);
        const randomQuizdata = quizdataArray[randomNumber];
        setCurrentQuizdata(randomQuizdata);
        setCurrentSolution(randomQuizdata.solution);
    };

    const submitAnswer = (e) => {
        // Check if open for answers:
        if (!openForAnswers) {
            return;
        }

        // Check if answer is correct:
        if (e.target.textContent === currentSolution) {
            console.log("CORRECT!!!");
            // Set background to green:
            e.target.classList.add("green");
            setCorrectGuesses(correctGuesses + 1);
        } else {
            e.target.classList.add("red");
            setFalseGuesses(falseGuesses + 1);
        }

        setOpenForAnswers(false);
        showAnswer();
    };

    const nextQuestion = () => {
        removeHelperClasses();
        console.log("clicked next question");
        getRandomQuizdata(quizdata);
        setOpenForAnswers(true);
    };

    const showAnswer = () => {
        setOpenForAnswers(false);

        // Loop through answer displays and check for solution:
        answerDisplays.forEach((answer) => {
            if (answer.textContent === currentSolution) {
                answer.classList.add("green");
            }
        });
    };

    const removeHelperClasses = () => {
        answerDisplays.forEach((answer) => {
            if (answer.classList.contains("green")) {
                answer.classList.remove("green");
            }
            if (answer.classList.contains("red")) {
                answer.classList.remove("red");
            }
        });
    };

    return (
        <div className="quiz-experience-container">
            <span className="score-minus">False: {falseGuesses && falseGuesses}</span>
            <span className="score-plus">Correct: {correctGuesses && correctGuesses}</span>
            <div className="container">
                <h1>Quiz App</h1>

                <div className="quiz-card">
                    <h2>{currentQuizdata && currentQuizdata.question}</h2>
                    <div className="quiz-answers">
                        <div onClick={submitAnswer} className="answer answer-1">
                            {currentQuizdata && currentQuizdata.answer1}
                        </div>
                        <div onClick={submitAnswer} className="answer answer-2">
                            {currentQuizdata && currentQuizdata.answer2}
                        </div>
                        <div onClick={submitAnswer} className="answer answer-3">
                            {currentQuizdata && currentQuizdata.answer3}
                        </div>
                        <div onClick={submitAnswer} className="answer answer-4">
                            {currentQuizdata && currentQuizdata.answer4}
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={showAnswer} className="btn btn-show-answer">
                        SHOW ANSWER
                    </button>
                    &nbsp;
                    <button onClick={nextQuestion} className="btn btn-next">
                        NEXT QUESTION
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayQuiz;
