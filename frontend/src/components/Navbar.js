import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
