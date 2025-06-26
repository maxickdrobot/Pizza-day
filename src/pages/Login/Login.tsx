import { ChangeEvent, useContext, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router";
import { userContext } from "../../contexts/UserContext";
import styles from "./Login.module.scss";

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
            <p className={styles.subtitle}>Straight out of the oven, straight to you.</p>
            <p className={styles.welcome}>👉 Welcome! Please start by telling us your name:</p>
            <Input
                type="text"
                placeholder="Your full name"
                aria-label="Your full name"
                value={name}
                onChange={handleNameChange}
            />
            <Button onClick={handleStartOrder}>Start Order</Button>
        </>
    );
};

export default Login;
