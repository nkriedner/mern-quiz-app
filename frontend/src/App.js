import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Introduction from "./pages/Introduction";
import PlayQuiz from "./pages/PlayQuiz";
import EditData from "./pages/EditData";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    const { user } = useAuthContext();

    return (
        <div>
            <BrowserRouter>
                <Navbar /> {/* needs to go inside BrowserRouter but outside of Routes */}
                <main>
                    <Routes>
                        <Route exact path="/" element={<Introduction />} />
                        <Route exact path="/play-quiz" element={user ? <PlayQuiz /> : <Navigate to="/login" />} />
                        <Route exact path="/edit-data" element={user ? <EditData /> : <Navigate to="/login" />} />
                        <Route exact path="/signup" element={!user ? <Signup /> : <Navigate to="/play-quiz" />} />
                        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/play-quiz" />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
