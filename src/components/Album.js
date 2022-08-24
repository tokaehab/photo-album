import React, { useState, useEffect, useRef, useCallback } from "react";
import style from "./style.module.css";
import Column from "./Column";

const Album = (props) => {
  const [images, updateImages] = useState([]);
  const [pageNumber, updatePageNumber] = useState(1);
  const prevPageNumberRev = useRef();

  const getImages = useCallback(async () => {
    const apiUrl = `https://picsum.photos/v2/list?page=${pageNumber}`;
    const response = await (await fetch(apiUrl)).json();
    updateImages(
      images.concat(
        response.map((imageData) => {
          return {
            id: imageData.id,
            height: imageData.height,
            width: imageData.width,
            author: imageData.author,
            url: imageData.download_url,
          };
        })
      )
    );
  }, [pageNumber, images]);

  useEffect(() => {
    if (pageNumber !== prevPageNumberRev.current) {
      getImages();
      prevPageNumberRev.current = pageNumber;
    }
  }, [pageNumber, getImages]);

  const loadMore = (event) => {
    updatePageNumber(pageNumber + 1);
  };

  return (
    <>
      <div className={style.mainContainer}>
        <Column images={images.slice(0, images.length / 3)}></Column>
        <Column
          images={images.slice(images.length / 3, (images.length / 3) * 2)}
        ></Column>
        <Column images={images.slice((images.length / 3) * 2)}></Column>
      </div>
      <button className={style.load} onClick={loadMore}>
        Load More
      </button>
    </>
  );
};

export default Album;
