//react hooks and helpers
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
//component
import DarkMoodContext from "../context/DarkMoodContext";
//styles
import styles from "../styles/Posts.module.scss";

export default function Posts() {
  const { usId } = useParams();
  const darkThemeMode = useContext(DarkMoodContext);
  const { darkTheme } = darkThemeMode;

  const navigate = useNavigate();

  //get request from localStorage
  const postsStorage = localStorage.getItem("posts");
  const postsArray = JSON.parse(postsStorage);

  const current_user = postsArray.filter(({ userId }) => userId === +usId);

  function goBack() {
    navigate(-1);
  }

  return (
    <main className={`${darkTheme.includes(+usId) ? styles.dark : null}`}>
      <img
        onClick={goBack}
        className={`${styles.back_btn} ${
          darkTheme.includes(+usId) ? styles.btn_color : styles.back_btn
        }`}
        src="https://img.icons8.com/ios-filled/50/000000/left.png"
      />
      <div className={styles.header}>POSTS</div>
      <div className={styles.posts_cont}>
        {current_user.map(posts => {
          return (
            <div key={posts.id} className={styles.posts_cont_cards}>
              <h3 className={styles.posts_cont_cards_title}>{posts.title}</h3>
              <p className={styles.posts_cont_cards_body}>{posts.body}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
