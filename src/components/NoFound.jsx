import React from 'react';
//images
import noFoundPic from "../images/nofound.jpg";
//styles
import style from "../styles/AboutUsers.module.scss"

export default function NoFound() {
  return (
    <img className={style.error_img} src={noFoundPic} alt="error" />
  )
}
