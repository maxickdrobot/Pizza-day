import { ChangeEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Login = () => {
    const [name, setName] = useState<string>("");

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleStartOrder = () => {
        console.log(name);
    };

    return (
        <>
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            <Input
                type="text"
                placeholder="Your full name"
                aria-label="Your full name"
                value={name}
                onChange={handleNameChange}
            />
            <Button text="Start Order" className="btn" onClick={handleStartOrder} />
        </>
    );
};

export default Login;
