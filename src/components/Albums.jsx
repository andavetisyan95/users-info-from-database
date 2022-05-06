//react hooks and helpers
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";

//componenets
import DarkMoodContext from "../context/DarkMoodContext";

//styles
import styles from "../styles/Albums.module.scss";
//images
import newYork from "../images/newYork.jpg";

export default function Albums() {
  const { usId } = useParams();
  const [darkMode, setDarkMode] = useContext(DarkMoodContext);

  const navigate = useNavigate();

  //get request from localStorage
  const albumsStorage = localStorage.getItem("albums");
  const albumsArray = JSON.parse(albumsStorage);

  const current_user = albumsArray.filter(({ userId }) => userId === +usId);

  function goback() {
    navigate(-1);
  }

  return (
    <main className={`${darkMode.includes(+usId) ? styles.dark : null}`}>
      <img
        className={`${darkMode.includes(+usId) ? styles.btn_color : null}`}
        style={{ cursor: "pointer" }}
        onClick={goback}
        src="https://img.icons8.com/ios-filled/50/000000/left.png"
      />
      <div className={styles.header}>Albums</div>
      <div className={styles.albums_cont}>
        {current_user.map((albums) => {
          return (
            <div key={albums.id} className={styles.albums_cont_card}>
              <img
                className={styles.albums_cont_card_img}
                src={newYork}
                alt="new-york"
              />
              <h3 className={styles.albums_cont_card_title}>{albums.title}</h3>
            </div>
          );
        })}
      </div>
    </main>
  );
}
