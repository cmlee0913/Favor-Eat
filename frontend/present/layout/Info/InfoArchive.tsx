import React from "react";
import * as style from "./Info.style";

const link = {
  figma:
    "https://www.figma.com/file/1PNIjJxYLe4GLdvhklaYEH/Untitled?node-id=0-1&t=EtZpxB8o667OHcZb-0",
  figjam:
    "https://www.figma.com/file/iesYQbqBof0upcrLzQ7QD7/%ED%8A%B9%ED%99%94D108_OMZ?node-id=1316-3275&t=HgLLdO4ytkv58Rhy-0",
  notion: "https://www.notion.so/daily-scrum-2e6575466fc64d58ab2b473273ed9bb0",
};

const onClickLink = (type: string) => {
  window.open(link[type]);
};

export default function InfoArchive() {
  return (
    <style.InfoArchive>
      <div onClick={() => onClickLink("figma")}>
        <span>OMZ Design</span>
      </div>
      <div onClick={() => onClickLink("figjam")}>
        <span>OMZ 기획</span>
      </div>
      <div onClick={() => onClickLink("figjam")}>
        <span>OMZ Notion</span>
      </div>
    </style.InfoArchive>
  );
}
