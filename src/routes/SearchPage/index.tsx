import './styles.css';
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ButtonPrimary from '../../components/ButtonPrimary';

type FormData = {
    userName: string;
}

export default function SearchPage() {
    const [formData, setFormData] = useState<FormData>({ userName: '' })

    function handleInputUserNameChange(event: any) {
        const value = event.target.value;
        const userName = event.target.name;
        setFormData({ ...formData, [userName]: value })
    }

    return (

        <main>
            <section className="container">
                <div className="card" >
                    <h1>Encontre um perfil no Github</h1>

                    <form className='search-bar' action="">
                        <div>
                            <input type="text" name="userName" value={formData.userName} onChange={handleInputUserNameChange} placeholder="Usuário Github" />
                        </div>
                    </form>
                    <ButtonPrimary name="Encontrar" ></ButtonPrimary>
                </div>
                <Outlet />
            </section>
        </main>

    )
}