import { ChangeEvent, useContext, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router";
import { userContext } from "../contexts/UserContext";

const Login = () => {
    const [name, setName] = useState<string>("");
    const navigate = useNavigate();

    const user = useContext(userContext);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleStartOrder = () => {
        user?.setName(name);
        navigate("/menu");
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
