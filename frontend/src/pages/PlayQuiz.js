const PlayQuiz = () => {
    return (
        <div className="quiz-experience-container">
            <span className="score-minus">False: 0</span>
            <span className="score-plus">Correct: 0</span>
            <div className="container">
                <h1>Quiz App</h1>
                <div className="quiz-card">
                    <h2>(Quiz-Question)</h2>
                    <div className="quiz-answers">
                        <div className="answer answer-1">(Answer 1)</div>
                        <div className="answer answer-2">(Answer 2)</div>
                        <div className="answer answer-3">(Answer 3)</div>
                        <div className="answer answer-4">(Answer 4)</div>
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
