import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar /> {/* needs to go inside BrowserRouter but outside of Routes */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
