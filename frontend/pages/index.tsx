import { deleteAsync } from "@/action/apis/apis";
import { apiURL } from "@/store/constants";
import { userTokenSave } from "@/store/userStore";
import { ApiStateRes } from "@/types/Common/dummy";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [test, setTest] = useState<ApiStateRes>({
    isSuccess: false,
    result: "",
  });
  const router = useRouter();
  const [token] = useAtom(userTokenSave);

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  useEffect(() => {
    if (token.accessToken) {
      router.replace("/main");
      return;
    } else router.replace("/guide");
  }, [token]);

  useEffect(() => {
    deleteAsync(apiURL + "posts/1").then((res) => {
      console.log(res);
      setTest(res);
    });
  }, []);

  return <div>{test.isSuccess && test.result.title}</div>;
}
