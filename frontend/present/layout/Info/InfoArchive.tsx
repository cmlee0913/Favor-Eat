import React from "react";
import * as style from "./Info.style";

export default function InfoArchive() {
  const figma =
    "https://www.figma.com/file/1PNIjJxYLe4GLdvhklaYEH/Untitled?node-id=0-1&t=EtZpxB8o667OHcZb-0";
  const figjam =
    "https://www.figma.com/file/iesYQbqBof0upcrLzQ7QD7/%ED%8A%B9%ED%99%94D108_OMZ?node-id=1316-3275&t=HgLLdO4ytkv58Rhy-0";
  const notion =
    "https://www.notion.so/daily-scrum-2e6575466fc64d58ab2b473273ed9bb0";

  return (
    <style.InfoArchive>
      <div>
        OMZ Figma
        <button
          onClick={() => {
            window.open(figma);
          }}
        ></button>
      </div>
      <div>
        OMZ FigJam
        <button
          onClick={() => {
            window.open(figjam);
          }}
        ></button>
      </div>
      <div>
        OMZ Notion
        <button
          onClick={() => {
            window.open(notion);
          }}
        ></button>
      </div>
    </style.InfoArchive>
  );
}
