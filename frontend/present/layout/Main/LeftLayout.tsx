import FilpImageCardCompo from "@/present/component/FlipImageCardCompo/FlipImageCardCompo";
import * as style from "./MainLayout.style";

export default function LeftLayout({ foods, onClickRefresh }) {
  return (
    <style.Foods>
      <style.RefreshButton onClick={() => onClickRefresh()} />
      {foods.map((food, index) => (
        <FilpImageCardCompo className="item" key={index} {...food} />
      ))}
    </style.Foods>
  );
}
