import { ChangeEvent } from "react";

type InputsType = "text" | "password" | "email" | "phone" | "date";

interface InputProps {
    type: InputsType;
    className?: string;
    placeholder: string;
    ariaLabel?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
    const { type, placeholder, className, ariaLabel, value, onChange } = props;
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            aria-label={ariaLabel}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
