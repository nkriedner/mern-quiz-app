import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

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
                    {user && (
                        <>
                            <li>
                                <Link to="/play-quiz">Play Quiz</Link>
                            </li>
                            <li>
                                <Link to="/edit-data">Edit Data</Link>
                            </li>
                            <li>
                                <button onClick={handleClick}>
                                    <span>{user.email}</span>
                                    <br></br>
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                    {!user && (
                        <>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
