import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);
    };

    return (
        <div>
            <h2>Log in</h2>
            <form className="login" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button className="btn">Log in</button>
            </form>
        </div>
    );
};

export default Login;
