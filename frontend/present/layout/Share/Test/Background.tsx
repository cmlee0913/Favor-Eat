import * as style from "./Test.style";

import Clouds from "@/assets/image/SharePage/Test/Clouds.svg";
import Mountains from "@/assets/image/SharePage/Test/Mountains.svg";
import Tree1 from "@/assets/image/SharePage/Test/Tree1.svg";
import Tree2 from "@/assets/image/SharePage/Test/Tree2.svg";
import Tree3 from "@/assets/image/SharePage/Test/Tree3.svg";
import Tree4 from "@/assets/image/SharePage/Test/Tree4.svg";

export default function Background() {
  return (
    <>
      <style.Sky>
        <Clouds />
        <Clouds />
      </style.Sky>
      <style.Mountain>
        <Mountains />
      </style.Mountain>
      <style.Ground>
        <style.Trees>
          <Tree1 />
          <Tree2 />
          <Tree3 />
          <Tree4 />
          <Tree1 />
          <Tree4 />
          <Tree2 />
          <Tree3 />
        </style.Trees>
      </style.Ground>
    </>
  );
}
