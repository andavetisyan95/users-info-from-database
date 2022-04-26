import React from 'react';
//images
import mount from "../images/mount.jpg";
import userPic from "../images/user.jpg";
//styles
import styles from "../styles/AboutUsers.module.scss"

export default function AboutUsers() {

  
  return (
    <div className={styles.user}>
      <div className={styles.user_container}>
        <img src={mount} alt="mount"  className={styles.user_container_walp}/>
        <div className={styles.user_container_about_users}>
          <img src={userPic} alt="user" className = {styles.user_container_about_users_img} />

        <div className={styles.user_container_btns}>
          <button className={styles.user_container_btns_1}>Albums</button>
          <button className={styles.user_container_btns_2}>Posts</button>
        </div>
        </div>
      </div>
    </div>
  )
}
