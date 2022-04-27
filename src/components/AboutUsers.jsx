import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
//images
import mount from "../images/mount.jpg";
import userPic from "../images/user.jpg";
//styles
import styles from "../styles/AboutUsers.module.scss"

const URL = "https://jsonplaceholder.typicode.com/users";

export default function AboutUsers() {

  const [currentUser, setCurrentUser] = useState([])
  const { userId } = useParams()

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(results => {
        const current_user = results.find(({ id }) => id === +userId)
        setCurrentUser(current_user)
      })
  }, [])


  return (
    <div className={styles.user}>
      <div className={styles.user_container}>
        <img src={mount} alt="mount" className={styles.user_container_walp} />
        <div className={styles.user_container_about_users}>
          <img src={userPic} alt="user" className={styles.user_container_about_users_img} />

          <div>
            <h3>{currentUser?.name}</h3>
            <h4>{currentUser?.username}</h4>
            <p>{currentUser?.email}</p>
            <p>{currentUser?.phone}</p>
            <p>{currentUser?.website}</p>
          </div>



          <div className={styles.user_container_btns}>
            <Link to={`/albums/${userId}`}>
              <button className={styles.user_container_btns_1}>Albums</button>
            </Link>
            <button className={styles.user_container_btns_2}>Posts</button>
          </div>
        </div>
      </div>
    </div>
  )
}
