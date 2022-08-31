import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h2>Oops...</h2>
      <h3>That page cannot be found :</h3>
      <p>Going back to the Home Page is 3 seconds...</p>
    </div>
  );
}
