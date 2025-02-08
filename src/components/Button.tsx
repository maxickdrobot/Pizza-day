interface ButtonProps {
    text: string;
    className?: string;
    ariaLabel?: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { text, className, ariaLabel, onClick } = props;
    return (
        <button className={className} aria-label={ariaLabel} onClick={onClick}>{text}</button>
    )
}

export default Button;