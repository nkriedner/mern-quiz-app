import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Introduction</Link>
                    </li>
                    <li>
                        <Link to="/play-quiz">Play Quiz</Link>
                    </li>
                    <li>
                        <Link to="/edit-data">Edit Data</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
