interface ButtonProps {
    text: string;
}

const Button = (props: ButtonProps) => {
    const { text } = props;
    return (
        <button className="btn">{text}</button>
    )
}

export default Button;