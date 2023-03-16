import { useRouter } from "next/router";
import { useEffect } from "react";

import { ACCESS_TOKEN } from "@/store/constants";

export default function SocialLogin() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const token = router.query.token;
    const error = router.query.error;

    if (token) {
      localStorage.setItem(
        ACCESS_TOKEN,
        typeof token === "string" ? token : token[0],
      );
      router.replace("/taste");
    }
    if (error) {
      router.replace("/500");
    }
  }, [router.isReady]);
}
