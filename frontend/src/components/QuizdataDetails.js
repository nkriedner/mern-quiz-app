const QuizdataDetails = ({ quizdata }) => {
    return (
        <div className="quizdata-card">
            <h3>Question: {quizdata.question}</h3>
            <p>Answer 1: {quizdata.answer1}</p>
            <p>Answer 2: {quizdata.answer2}</p>
            <p>Answer 3: {quizdata.answer3}</p>
            <p>Answer 4: {quizdata.answer4}</p>
            <p>Solution: {quizdata.solution}</p>
        </div>
    );
};

export default QuizdataDetails;
