import MasonryLayout from "@/present/component/MasonryLayout/MasonryLayout";
import * as style from "@/present/layout/Favorite/pageStyle";

export default function Favorite() {
  return (
    <style.Container>
      <div style={{ marginBottom: "20px" }}>내가 좋아하는 메뉴</div>
      <MasonryLayout />
    </style.Container>
  );
}
