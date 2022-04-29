//react hooks and helpers
import React from 'react';
import { useParams } from 'react-router';
//styles
import styles from "../styles/Posts.module.scss";

export default function Posts() {
    const {usId} = useParams;
  return (
    <div>Posts  </div>
  )
}
