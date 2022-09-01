import { useEffect, useState } from "react";
import { useQuizdataContext } from "../hooks/useQuizdataContext";

const PlayQuiz = () => {
    const { quizdata, dispatch } = useQuizdataContext();
    const [currentQuizdata, setCurrentQuizdata] = useState([]);

    useEffect(() => {
        const fetchAllQuizdata = async (req, res) => {
            const response = await fetch("/api/quizdata");
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: "SET_QUIZDATA", payload: json });
            }

            getRandomQuizdata(json);
        };

        fetchAllQuizdata();
    }, [dispatch]);

    const getRandomQuizdata = (quizdataArray) => {
        const randomNumber = Math.floor(Math.random() * quizdataArray.length);
        const randomQuizdata = quizdataArray[randomNumber];
        setCurrentQuizdata(randomQuizdata);
    };

    return (
        <div className="quiz-experience-container">
            <span className="score-minus">False: 0</span>
            <span className="score-plus">Correct: 0</span>
            <div className="container">
                <h1>Quiz App</h1>

                <div className="quiz-card">
                    <h2>{currentQuizdata && currentQuizdata.question}</h2>
                    <div className="quiz-answers">
                        <div className="answer answer-1">{currentQuizdata && currentQuizdata.answer1}</div>
                        <div className="answer answer-2">{currentQuizdata && currentQuizdata.answer2}</div>
                        <div className="answer answer-3">{currentQuizdata && currentQuizdata.answer3}</div>
                        <div className="answer answer-4">{currentQuizdata && currentQuizdata.answer4}</div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-show-answer">SHOW ANSWER</button>
                    &nbsp;
                    <button className="btn btn-next">NEXT QUESTION</button>
                </div>
            </div>
        </div>
    );
};

export default PlayQuiz;
