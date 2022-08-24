import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./ImageDetails.module.css";

const ImageDetails = () => {
  const { id } = useParams();
  const [imageData, updateImageData] = useState();
  let firstTime = true;
  async function getImage() {
    const response = await (
      await fetch(`https://picsum.photos/id/${id}/info`)
    ).json();
    updateImageData({
      id: response.id,
      height: response.height,
      width: response.width,
      author: response.author,
      url: response.download_url,
    });
  }
  useEffect(() => {
    if (firstTime) {
      getImage();
      firstTime = false;
    }
  }, []);

  return (
    <>
      <p className={style.author}>By: {imageData?.author}</p>
      <img className={style.image} src={imageData?.url} />
    </>
  );
};

export default ImageDetails;
