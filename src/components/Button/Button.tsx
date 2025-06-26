import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    ariaLabel?: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { ariaLabel, onClick, children, className = "btn" } = props;
    return (
        <button className={styles[className]} aria-label={ariaLabel} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
