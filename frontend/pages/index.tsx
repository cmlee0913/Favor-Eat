import { deleteAsync } from "@/action/apis/apis";
import { ACCESS_TOKEN, apiURL } from "@/store/constants";
import { ApiStateRes } from "@/types/Common/dummy";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [test, setTest] = useState<ApiStateRes>({
    isSuccess: false,
    result: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (!localStorage) return;
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      router.replace("/");
    }
  }, [router.isReady]);

  useEffect(() => {
    deleteAsync(apiURL + "posts/1").then((res) => {
      console.log(res);
      setTest(res);
    });
  }, []);

  return <div>{test.isSuccess && test.result.title}</div>;
}
