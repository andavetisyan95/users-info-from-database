//react hooks and helpers
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";

//componenets
import DarkMoodContext from "../context/DarkMoodContext";

//styles
import styles from "../styles/Albums.module.scss";
//images
import newYork from "../images/newYork.jpg";
import withRequest from "../hoc/withRequest";

function Albums({ data }) {
  const { usId } = useParams();
  const darkThemeMode = useContext(DarkMoodContext);
  const { darkTheme } = darkThemeMode;

  const navigate = useNavigate();

  const current_user = data?.filter(({ userId }) => userId === +usId);

  function goback() {
    navigate(-1);
  }

  return (
    <div className={darkTheme.includes(+usId) ? styles.dark : styles.main_div}>
      <img
        className={darkTheme.includes(+usId) ? styles.btn_color : null}
        style={{ cursor: "pointer" }}
        onClick={goback}
        src="https://img.icons8.com/ios-filled/50/000000/left.png"
        alt="back_btn"
      />
      <div className={styles.header}>Albums</div>
      <div className={styles.albums_cont}>
        {current_user?.map(albums => {
          return (
            <div key={albums.id} className={styles.albums_cont_card}>
              <img className={styles.albums_cont_card_img} src={newYork} alt="new-york" />
              <h3 className={styles.albums_cont_card_title}>{albums.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withRequest(Albums, "albums");
