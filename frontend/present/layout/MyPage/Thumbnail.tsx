import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getFavoriteFoodList } from "@/action/apis/favorite";
import { useAtom } from "jotai";
import { userTokenSave } from "@/store/userStore";
import styled from "styled-components";
import { useRouter } from "next/router";

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  & > div {
    flex-shrink: 0;
  }
`;

export default function Thumbnail() {
  const [token] = useAtom(userTokenSave);
  const [favoriteList, setFavoriteList] = useState([]);
  const thumbnailRef = useRef(null);
  const router = useRouter();

  const handleImageClick = (recipeId) => {
    router.push(`/recipe/${recipeId}`);
  };

  const requestFavoriteFoodList = async (token: string) => {
    const { isSuccess, result } = await getFavoriteFoodList(token);
    if (isSuccess) {
      console.log("________________________________________");
      console.log(result);
      const list = result.map((item) => ({
        src: item.image,
        recipeId: item.foodsId,
      }));
      return list;
    }
    return null;
  };

  useEffect(() => {
    if (token.accessToken) {
      requestFavoriteFoodList(token.accessToken).then((list) => {
        if (list !== null) {
          setFavoriteList(list);
        }
      });
    }
  }, [token.accessToken]);

  const handleWheel = (event) => {
    event.preventDefault();
    const thumbnailEl = thumbnailRef.current;
    thumbnailEl.scrollBy({
      left: event.deltaY > 0 ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <ThumbnailWrapper onWheel={handleWheel} ref={thumbnailRef}>
      {favoriteList.map((item, index) => (
        <div key={index}>
          <img
            style={{
              borderRadius: "20px",
              marginRight: "5px",
              cursor: "pointer",
            }}
            src={item.src}
            width={200}
            height={260}
            object-fit
            onClick={() => handleImageClick(item.recipeId)}
          />
        </div>
      ))}
    </ThumbnailWrapper>
  );
}
