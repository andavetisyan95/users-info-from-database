import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//components
import DarkMoodContext from "../context/DarkMoodContext";

//images
import mountPic from "../images/mount.jpg";
import userPic from "../images/user.jpg";
import nightPic from "../images/night.jpg";
import darkUserPic from "../images/darkUser.jpg";
//styles
import styles from "../styles/AboutUsers.module.scss";
import withRequest from "../hoc/withRequest";

function AboutUsers({ data }) {
  //react hooks consts
  const { usId } = useParams();
  //react context import
  const darkModeTheme = useContext(DarkMoodContext);
  //context destructed
  const { darkTheme, setDark } = darkModeTheme;

  //received request from HOC
  const current_user = data?.find(({ id }) => id === +usId);

  const handleDark = id => {
    if (!darkTheme.includes(+id)) {
      setDark(darkTheme.concat(+id));
    } else {
      setDark(darkTheme.filter(el => el !== +id));
    }
  };

  return (
    <div className={` ${styles.user} ${darkTheme.includes(+usId) ? styles.dark : styles.user}`}>
      <div className={styles.user_switch_toggle}>
        <div
          className={` ${styles.user_switch_toggle_board} ${
            darkTheme.includes(+usId) ? styles.green : styles.user_switch_toggle_board
          }`}
        >
          <div
            onClick={() => handleDark(usId)}
            className={` ${styles.user_switch_toggle_board_ball} ${
              darkTheme.includes(+usId) ? styles.active : styles.user_switch_toggle_board_ball
            }`}
          ></div>
        </div>
      </div>
      <div className={`${styles.user_container} ${darkTheme.includes(+usId) ? styles.outlined : styles.user_container}`}>
        <img src={`${darkTheme.includes(+usId) ? nightPic : mountPic}`} alt="mount" className={styles.user_container_walp} />
        <div className={styles.user_container_about_users}>
          <img
            src={`${darkTheme.includes(+usId) ? darkUserPic : userPic}`}
            alt="user"
            className={styles.user_container_about_users_img}
          />
          <h3 style={{ color: "#949425", fontWeight: "800" }}>{current_user?.name}</h3>
          <h4 style={{ color: "#5b9e34" }}>{current_user?.username}</h4>
          <p>
            Email: <span> {current_user?.email} </span>
          </p>
          <p>
            Phone: <span>{current_user?.phone}</span>
          </p>
          <p>
            Websit: <span>{current_user?.website}</span>
          </p>
          <div className={styles.user_container_btns}>
            <Link to={`/albums/${usId}`}>
              <button className={styles.user_container_btns_1}>Albums</button>
            </Link>
            <Link to={`/posts/${usId} `}>
              <button className={styles.user_container_btns_2}>Posts</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRequest(AboutUsers, "users");

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

//local storage
// const usersStorage = localStorage.getItem("users");
// const usersArray = JSON.parse(usersStorage);
