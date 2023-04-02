import { useContext, useEffect, useState } from "react";

import DiaryEditor from "@/present/component/DiaryCompo/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
