import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./pages/Introduction";
import PlayQuiz from "./pages/PlayQuiz";
import EditData from "./pages/EditData";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar /> {/* needs to go inside BrowserRouter but outside of Routes */}
                <main>
                    <Routes>
                        <Route exact path="/" element={<Introduction />} />
                        <Route exact path="/play-quiz" element={<PlayQuiz />} />
                        <Route exact path="/edit-data" element={<EditData />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/login" element={<Login />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
