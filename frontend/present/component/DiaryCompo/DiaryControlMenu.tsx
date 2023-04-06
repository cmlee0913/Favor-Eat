import * as style from "./DiaryCompo.style";

const DiaryControlMenu = ({ value, onChange, optionList }: any) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

export default DiaryControlMenu;
