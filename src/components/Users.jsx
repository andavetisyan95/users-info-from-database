//hooks
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//images
import unknownImg from "../images/unknown2.jpg"
//styles
import styles from "../styles/Users.module.scss"

const URL = "https://jsonplaceholder.typicode.com/users";

export default function Users() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                setUsers(users);
                localStorage.setItem("users",JSON.stringify(users))
            })

    }, [])

    return (
        <div className={styles.users_div}>
            {
                users.map((user) => {
                    return <Link to={`/aboutUsers/${user.id}`} className={styles.users_div_card} key={user.id}>
                        <img className={styles.users_div_card_img} src={unknownImg} ></img>
                        <p className={styles.users_div_card_pTag}>{user.username}</p>
                    </Link>
                })
            }
        </div>
    )
}
