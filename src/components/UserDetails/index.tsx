import './styles.css';
import { UserDTO } from '../../models/user';
import * as userService from '../../services/user-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDetailsCard from '../UserDetailsCard';

export default function UserDetails() {
    const params = useParams();
    const [user, setUser] = useState<UserDTO>();


    useEffect(() => {
        userService.findByUserName(String(params.userName))
            .then(response => {
                console.log(response.data)
                setUser({
                    avatar_url: response.data.avatar_url,
                    url: response.data.url,
                    name: response.data.name,
                    location: response.data.location,
                    followers: response.data.followers
                })
            })
            .catch(error => {
                navigate("/")
            })
    }, [])

    return (

        <section className='container'>
            {
                user && <UserDetailsCard user={user} />
            }
        </section>
    )
}