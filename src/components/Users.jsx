//hooks
import React from "react";
import { Link } from "react-router-dom";

//images
import unknownImg from "../images/unknown2.jpg";
//styles
import styles from "../styles/Users.module.scss";

const usersStorage = localStorage.getItem("users");
const usersArray = JSON.parse(usersStorage);

export default function Users() {
  return (
    <div className={styles.users_div}>
      {usersArray.map((user) => {
        return (
          <Link
            to={`/aboutUsers/${user.id}`}
            className={styles.users_div_card}
            key={user.id}
          >
            <img className={styles.users_div_card_img} src={unknownImg}></img>
            <p className={styles.users_div_card_pTag}>{user.username}</p>
          </Link>
        );
      })}
    </div>
  );
}
