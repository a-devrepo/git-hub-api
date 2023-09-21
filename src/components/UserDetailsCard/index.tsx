import './styles.css';
import { UserDTO } from "../../models/user";

type Props = { user: UserDTO }

export default function UserDetailsCard({ user }: Props) {
    return (
        <div className="user-details-card">
            <img src={user.avatar_url} alt={user.name} />
            <div className='user-info-card'>
                <h4>Informações</h4>
                <div className='user-info-field'>
                    <p><span>Perfil: </span> <a href={user.url} target='blank'>{user.url}</a></p>
                </div>
                <div className='user-info-field'>
                    <p><span>Seguidores: </span>{user.followers} </p>
                </div>
                <div className='user-info-field'>
                    <p><span>Localidade: </span>{user.location} </p>
                </div>
                <div className='user-info-field'>
                    <p><span>Nome: </span>{user.name} </p>
                </div>
            </div>
        </div>
    );
}