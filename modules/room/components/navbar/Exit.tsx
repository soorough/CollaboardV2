import React from "react";
import { useRouter } from "next/router";

const Exit = () => {
  const router = useRouter();

  const handleExit = () => {
    router.push("/");
  };

  return (
    <>
      <button className="cursor-pointer hover:20" onClick={handleExit}>
        <img
          className="h-[26px] w-[26px] relative min-h-[26px] z-[1]"
          loading="lazy"
          alt=""
          src="/exitbutton.svg"
        />
      </button>
    </>
  );
};

export default Exit;
