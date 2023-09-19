import './styles.css';

type Props = {
    name: string;
}

export default function ButtonPrimary({ name: text }: Props) {
    return (
        <div className="btn mt28">
            {text}
        </div>);
}