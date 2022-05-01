//react hooks and helpers
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
//styles
import styles from "../styles/Posts.module.scss";

const URL = "https://jsonplaceholder.typicode.com/posts"

export default function Posts() {
    const { usId } = useParams();

    const [currentPosts, setCurrentPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(results => {
                const current_user = results.filter(({ userId }) => userId === +usId)
                setCurrentPosts(current_user)
            })
    }, [])

   function goBack(){
        navigate(-1);
   }

    return (
        <main>
             <img onClick={goBack} className={styles.back_btn} src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            <div className={styles.header}>
                POSTS
            </div>
            <div className={styles.posts_cont}>
                {
                    currentPosts.map((posts)=>{
                        return(
                            <div key={posts.id} className={styles.posts_cont_cards}>
                            <h3 className={styles.posts_cont_cards_title}>{posts.title}</h3>
                            <p className={styles.posts_cont_cards_body}>{posts.body}</p>
                        </div>
                        )
                    })
                }
            </div>
        </main>
    )
}
