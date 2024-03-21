import React from "react";
import { useRefs } from "../../hooks/useRefs";
import { useMyMoves } from "../../../../common/recoil/room";
import { useSavedMoves } from "../../../../common/recoil/savedMoves";

const UndoRedoButtons = () => {
  const { redoRef, undoRef } = useRefs();

  const { myMoves } = useMyMoves();

  const savedMoves = useSavedMoves();

  return (
    <>
      <button
        className="absolute left-[0px] bottom-[0px] bg-inherit z-[4] disabled:opacity-25"
        ref={undoRef}
        disabled={!savedMoves.length}
      >
        <img
          className="w-[35.3px] h-[35.3px] absolute !m-[0] bottom-[43px] left-[20px] rounded-[100%] object-contain z-[4]"
          loading="lazy"
          alt=""
          src="/undo@2x.png"
        />
      </button>
      <button
        className="absolute left-[0px] bottom-[0px] bg-inherit z-[4] disabled:opacity-25"
        ref={redoRef}
        disabled={!myMoves.length}
      >
        <img
          className="w-[35.3px] h-[35.3px] absolute !m-[0] bottom-[43px] left-[60px] rounded-[100%] object-contain z-[4]"
          loading="lazy"
          alt=""
          src="/redo@2x.png"
        />
      </button>
    </>
  );
};

export default UndoRedoButtons;
