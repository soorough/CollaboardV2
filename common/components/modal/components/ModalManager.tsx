import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import modalAtom from "../../../recoil/modal";
import Portal from "../../portal/components/Portal";
import { AnimatePresence, motion } from "framer-motion";
import {
  bgAnimation,
  modalAnimation,
} from "../animations/ModalManager.animations";

const ModalManager = () => {
  const [{ opened, modal }, setModal] = useRecoilState(modalAtom);

  const [portalNode, setPortalNode] = useState<HTMLElement>();

  useEffect(() => {
    if (!portalNode) {
      const node = document.getElementById("portal");
      if (node) setPortalNode(node);
      return;
    }
    if (opened) {
      portalNode.style.pointerEvents = "all";
    } else {
      portalNode.style.pointerEvents = "none";
    }
  }, [opened, portalNode]);

  return (
    <Portal>
      <motion.div
        className="z-40 flex min-h-full w-full justify-center bg-black/80"
        onClick={() => setModal({ modal: <></>, opened: false })}
        variants={bgAnimation}
        initial="closed"
        animate={opened ? "opened" : "closed"}
      >
        <AnimatePresence>
          {opened && (
            <motion.div
              variants={modalAnimation}
              initial="closed"
              animate="opened"
              exit="exited"
              onClick={(e) => e.stopPropagation}
              className="p-6"
            >
              {modal}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Portal>
  );
};

export default ModalManager;
