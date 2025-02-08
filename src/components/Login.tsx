import Button from "./Button";
import Input from "./Input";

const Login = () => {
    return (
        <>
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            <Input type="text" placeholder="Your full name" aria-label="Your full name" />
            <Button text="Start Order" />
        </>
    );
}

export default Login;