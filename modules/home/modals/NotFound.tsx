import { useModal } from "../../../common/recoil/modal";
import { AiOutlineClose } from "react-icons/ai";
import React from 'react'


const NotFoundModel = ({ id }: { id: string }) => {
  const { closeModal } = useModal();

  return (
    <div className="relative flex flex-col items-center rounded-md bg-white p-10">
      <button onClick={closeModal} className="absolute top-5 right-5">
        <AiOutlineClose />
      </button>
      <h2 className="text-lg font-bold">Room with the Id ({id}) NOT FOUND!</h2>
      <h3>Check Id and try to join the room again.</h3>
    </div>
  );
};

export default NotFoundModel;
