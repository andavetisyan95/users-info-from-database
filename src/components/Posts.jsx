//react hooks and helpers
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
//component
import DarkMoodContext from "../context/DarkMoodContext";
import withRequest from "../hoc/withRequest";
//styles
import styles from "../styles/Posts.module.scss";

function Posts({ data }) {
  const { usId } = useParams();
  const darkThemeMode = useContext(DarkMoodContext);
  const { darkTheme } = darkThemeMode;

  const navigate = useNavigate();

  const current_user = data?.filter(({ userId }) => userId === +usId);

  function goBack() {
    navigate(-1);
  }

  return (
    <div className={darkTheme.includes(+usId) ? styles.dark : styles.posts_div}>
      <img
        onClick={goBack}
        className={darkTheme.includes(+usId) ? styles.btn_color : styles.posts_div_back_btn}
        src="https://img.icons8.com/ios-filled/50/000000/left.png"
        alt="button"
      />
      <div className={styles.header}>POSTS</div>
      <div className={styles.posts_cont}>
        {current_user?.map(posts => {
          return (
            <div key={posts.id} className={styles.posts_cont_cards}>
              <h3 className={styles.posts_cont_cards_title}>{posts.title}</h3>
              <p className={styles.posts_cont_cards_body}>{posts.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withRequest(Posts, "posts");
