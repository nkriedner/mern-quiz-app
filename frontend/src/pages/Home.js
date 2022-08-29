import { useEffect, useState } from "react";
import QuizdataDetails from "../components/QuizdataDetails";

const Home = () => {
    const [allQuizdata, setAllQuizdata] = useState(null);

    useEffect(() => {
        const fetchAllQuizdata = async () => {
            const response = await fetch("/api/quizdata");
            const json = await response.json();

            if (response.ok) {
                setAllQuizdata(json);
            }
        };

        fetchAllQuizdata();
    }, []);

    return (
        <div>
            <h2>Welcome from Home</h2>
            {allQuizdata && allQuizdata.map((quizdata) => <QuizdataDetails key={quizdata._id} quizdata={quizdata} />)}
        </div>
    );
};

export default Home;
