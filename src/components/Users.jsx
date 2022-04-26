//hooks
import React, { useEffect, useState } from 'react';
//images
import unknownImg from "../images/unknown2.jpg"
//styles
import styles from "../styles/Users.module.scss"

const URL = "https://jsonplaceholder.typicode.com/users"
export default function Users() {
    const [users,setUsers]= useState([]);

    useEffect(()=>{
        fetch(URL)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
           setUsers(data);
        })
        
    },[])

  return (
    <div className={styles.users_div}>
        {
            users.map((user)=>{
                return <div className={styles.users_div_card} key={user.id}>
                <img className={styles.users_div_card_img} src={unknownImg } ></img>
                <p className={styles.users_div_card_pTag}>{user.username}</p>
            </div>
            })
        }
    </div>
  )
}
