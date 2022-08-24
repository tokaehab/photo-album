import React from "react";
import style from "./style.module.css";
import Card from "./Card";

const Column = (props) => {
  return (
    <div className={style.column}>
      {props.images.map((image) => {
        return <Card key={image.id} item={image}></Card>;
      })}
    </div>
  );
};

export default Column;
