import FilpImageCardCompo from "@/present/component/FlipImageCardCompo/FlipImageCardCompo";
import * as style from "./MainLayout.style";

export default function LeftLayout({ foods }) {
  return (
    <style.Foods>
      <style.RefreshButton />
      {foods.map((food, index) => (
        <FilpImageCardCompo className="item" key={index} {...food} />
      ))}
    </style.Foods>
  );
}
