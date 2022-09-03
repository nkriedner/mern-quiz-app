import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
    };

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
                    <li>
                        <button onClick={handleClick}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
