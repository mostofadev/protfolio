'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const NoProtectedRouteUser = ({ children }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth-token");;
      console.log(token);
      
      if (token) {
        router.push("/user/dashboard");
      } else {
        setHasToken(true);
      }
      setIsChecking(false);
    }
  }, [router]);

 // if (isChecking) return <Loader />; 

  return hasToken ? children : null;
};

export default NoProtectedRouteUser;
