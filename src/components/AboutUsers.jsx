import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//components
import DarkMoodContext from "../context/DarkMoodContext";

//images
import mount from "../images/mount.jpg";
import userPic from "../images/user.jpg";
//styles
import styles from "../styles/AboutUsers.module.scss";

export default function AboutUsers() {
  //react hooks consts
  const { userId } = useParams();
  const [darkMode, setDarkMode] = useContext(DarkMoodContext);

  //local storage
  const usersStorage = localStorage.getItem("users");
  const usersArray = JSON.parse(usersStorage);

  const current_user = usersArray.find(({ id }) => id === +userId);

  return (
    <div className={` ${styles.user} ${darkMode ? styles.dark : styles.user}`}>
      <div className={styles.user_switch_toggle}>
        <div
          className={` ${styles.user_switch_toggle_board} ${
            darkMode ? styles.green : styles.user_switch_toggle_board
          }`}
        >
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={` ${styles.user_switch_toggle_board_ball} ${
              darkMode ? styles.active : styles.user_switch_toggle_board_ball
            }`}
          ></div>
        </div>
      </div>
      <div className={styles.user_container}>
        <img src={mount} alt="mount" className={styles.user_container_walp} />
        <div className={styles.user_container_about_users}>
          <img
            src={userPic}
            alt="user"
            className={styles.user_container_about_users_img}
          />
          <h3 style={{ color: "#949425", fontWeight: "800" }}>
            {current_user?.name}
          </h3>
          <h4 style={{ color: "#5b9e34" }}>{current_user?.username}</h4>
          <p>
            Email: <span> {current_user?.email} </span>
          </p>
          <p>
            Phone: <span>{current_user?.phone}</span>
          </p>
          <p>
            {" "}
            Websit: <span>{current_user?.website}</span>
          </p>
          <div className={styles.user_container_btns}>
            <Link to={`/albums/${userId}`}>
              <button className={styles.user_container_btns_1}>Albums</button>
            </Link>
            <Link to={`/posts/${userId} `}>
              <button className={styles.user_container_btns_2}>Posts</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// const URL = "https://jsonplaceholder.typicode.com/users";
// const [currentUser, setCurrentUser] = useState()

// useEffect(() => {
//   fetch(URL)
//     .then(response => response.json())
//     .then(results => {
//       const current_user = results.find(({ id}) => id === +userId)
//       setCurrentUser(current_user)
//     })
// }, [])
