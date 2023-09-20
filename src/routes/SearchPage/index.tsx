import './styles.css';
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormButton from '../../components/FormButton';


type FormData = {
    userName: string;
}

export default function SearchPage() {
    const [formData, setFormData] = useState<FormData>({ userName: '' })
    const navigate = useNavigate();

    function handleInputUserNameChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();
        navigate(`user-details/${formData.userName}`);
    }

    return (

        <main>
            <section className="container">
                <div className="card" >
                    <h1>Encontre um perfil no Github</h1>

                    <form className='search-bar' onSubmit={handleFormSubmit}>
                        <div>
                            <input type="text" name="userName" value={formData.userName} onChange={handleInputUserNameChange} placeholder="Usuário Github" />
                        </div>
                        <FormButton name="Encontrar" ></FormButton>
                    </form>
                </div>
            </section>
            <Outlet />
        </main>

    )
}