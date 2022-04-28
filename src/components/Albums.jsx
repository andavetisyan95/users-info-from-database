//react hooks and helpers
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

//styles
import styles from "../styles/Albums.module.scss"
//images
import newYork from "../images/newYork.jpg"

const URL = "https://jsonplaceholder.typicode.com/albums"

export default function Albums() {

    const { usId } = useParams()

    const [currentAlbums, setCurrentAlbums] = useState([]);

    useEffect(() => {
        fetch(URL)
          .then(response => response.json())
          .then(results => {
            const current_user = results.filter(({ userId }) => userId  === +usId)
            setCurrentAlbums(current_user)
          })
      }, [])

      
    return (
        <main>
            <Link to={`/aboutUsers/${usId}`}>
            <img  src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
            <div className={styles.header}>Albums</div>
            <div className={styles.albums_cont}>
                {
                    currentAlbums.map((albums) => {
                        return (
                        <div className={styles.albums_cont_card}>
                            <img className={styles.albums_cont_card_img} src={newYork} alt="new-york" />
                            <h3 className={styles.albums_cont_card_title}>{albums.title}</h3>
                        </div>)
                    } )
                }
            </div>
        </main>
        
    )
}
