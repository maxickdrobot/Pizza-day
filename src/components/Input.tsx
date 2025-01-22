type InputsType = "text" | "password" | "email" | "phone" | "date";

interface InputProps {
    type: InputsType;
    placeholder?: string;
    ariaLabel?: string;
}

const Input = (props: InputProps) => {
    const { type, placeholder, ariaLabel } = props;
    return (
        <input type={type} placeholder={placeholder} aria-label={ariaLabel} />
    )
}

export default Input;