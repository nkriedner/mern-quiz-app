import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);
    };

    return (
        <div>
            <h2>Sign up</h2>
            <form className="signup" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button className="btn">Sign up</button>
            </form>
        </div>
    );
};

export default Signup;
