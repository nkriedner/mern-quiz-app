import { useEffect, useState } from "react";
import QuizdataForm from "../components/QuizdataForm";
import QuizdataDetails from "../components/QuizdataDetails";

const EditData = () => {
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
            <h1>Inside EditData component</h1>
            <QuizdataForm></QuizdataForm>
            <h2>Quizdata List</h2>
            {allQuizdata && allQuizdata.map((quizdata) => <QuizdataDetails key={quizdata._id} quizdata={quizdata} />)}
        </div>
    );
};

export default EditData;
