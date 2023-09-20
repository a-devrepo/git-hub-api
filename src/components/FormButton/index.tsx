import './styles.css';

type Props = {
    name: string;
}

export default function FormButton({ name: text }: Props) {
    return (
        <button type='submit' className="btn mt28">
            {text}
        </button>);
}