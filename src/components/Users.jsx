//hooks
import React from "react";
import { Link } from "react-router-dom";
import withRequest from "../hoc/withRequest";

//images
import unknownImg from "../images/unknown2.jpg";
//styles
import styles from "../styles/Users.module.scss";

function Users({ data }) {
  return (
    <div className={styles.users_div}>
      {data?.map(user => {
        return (
          <Link to={`/aboutUsers/${user.id}`} className={styles.users_div_card} key={user.id}>
            <img className={styles.users_div_card_img} alt="users" src={unknownImg}></img>
            <p className={styles.users_div_card_pTag}>{user.username}</p>
          </Link>
        );
      })}
    </div>
  );
}
export default withRequest(Users, "users");
