import ButtonPrimary from '../../components/ButtonPrimary';
import './styles.css';

export default function HomeBody() {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="section-title mt28">
                        <h1> Desafio Github API</h1>
                    </div>
                    <div className="section-description">
                        <p>DevSuperior - Escola de Programação</p>
                    </div>
                    <ButtonPrimary name="Começar" />
                </div>
            </section>
        </main>
    );
}