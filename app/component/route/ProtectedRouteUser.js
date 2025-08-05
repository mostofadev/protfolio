'use client';

import { getTokenFromLocal } from "@/app/utils/getGuestToken";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../ui/loader/pageSpinner";

const ProtectedRouteUser = ({ children }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("user_token");;
      console.log(token);
      
      if (!token) {
        router.push("/login");
      } else {
        setHasToken(true);
      }
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) return <Loader />; // অথবা loading spinner দেখাতে পারো

  return hasToken ? children : null;
};

export default ProtectedRouteUser;
