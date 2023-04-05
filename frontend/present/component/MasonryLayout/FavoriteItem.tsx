
import Link from "next/link";
import { useRouter } from "next/router";
import { ItemProps } from "@/types/MyPage/dummy";
import AutoHeightImage from "./AutoHeightImage";

export const Item = ({ src, recipeId }: ItemProps) => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push(`/recipe/${recipeId}`);
    };
  
    return (
      <div>
        <Link href={`/recipe/${recipeId}`} prefetch={false}>
          <AutoHeightImage src={src} alt="egjs" />
          {/* <div>{`${num}`}</div> */}
        </Link>
      </div>
    );
  };