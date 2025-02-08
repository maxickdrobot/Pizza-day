type InputsType = "text" | "password" | "email" | "phone" | "date";

interface InputProps {
    type: InputsType;
    className?: string;
    placeholder: string;
    ariaLabel?: string;
}

const Input = (props: InputProps) => {
    const { type, placeholder, className, ariaLabel } = props;
    return (
        <input type={type} placeholder={placeholder} className={className} aria-label={ariaLabel}/>
    )
}

export default Input;