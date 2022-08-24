import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  console.log(props.item);
  return (
    <Link to={`/image/${props.item.id}`}>
      <img className={style.image} src={props.item.url} alt={props.item.url} />
    </Link>
  );
};

export default Card;
