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
            <h1>Inside Signup Component</h1>
            <form onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button>Sign up</button>
            </form>
        </div>
    );
};

export default Signup;
