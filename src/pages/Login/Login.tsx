import { ChangeEvent, useContext, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";
import { userContext } from "../../contexts/UserContext";
import styles from "./Login.module.scss";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const user = useContext(userContext);

    const handleSubmit = async () => {
        setError("");

        try {
            if (isRegistering) {
                const regRes = await fetch("http://localhost:3000/web/users/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password }),
                });

                if (!regRes.ok) {
                    const errorData = await regRes.json();
                    throw new Error(errorData.error || "Registration failed");
                }

                console.log("Registered. Logging in...");
            }

            const loginRes = await fetch("http://localhost:3000/web/users/login", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!loginRes.ok) {
                const errorData = await loginRes.json();
                throw new Error(errorData.error || "Login failed");
            }

            const loginData = await loginRes.json();
            user?.setName(loginData.user.name);
            user?.setId(loginData.user.id);
            navigate("/menu");
        } catch (err: any) {
            console.error("Auth error:", err);
            setError(err.message);
        }
    };

    return (
        <div className={styles.container}>
            <h1>The best pizza.</h1>
            <p className={styles.subtitle}>Straight out of the oven, straight to you.</p>
            <p className={styles.welcome}>
                {isRegistering ? "👉 Create your account:" : "👉 Welcome back! Log in:"}
            </p>

            {isRegistering && (
                <Input
                    type="text"
                    placeholder="Full Name"
                    aria-label="Full Name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
            )}
            <Input
                type="email"
                placeholder="Email"
                aria-label="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            {error && <p className={styles.error}>Sorry, something went wrong</p>}

            <Button onClick={handleSubmit}>{isRegistering ? "Register & Login" : "Login"}</Button>

            <p className={styles.toggle}>
                {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
                <span onClick={() => setIsRegistering(!isRegistering)} className={styles.link}>
                    {isRegistering ? "Login here" : "Register here"}
                </span>
            </p>
        </div>
    );
};

export default Login;
