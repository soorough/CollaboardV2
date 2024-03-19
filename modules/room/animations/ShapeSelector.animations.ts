import { DEFAULT_EASE } from "../../../common/constants/easing";

export const ShapeSelectorAnimation = {
  from: {
    y: -30,
    opacity: 0,
    transition: {
      ease: DEFAULT_EASE,
      duration: 0.2,
    },
  },

  to: {
    y: 0,
    opacity: 1,
    transition: {
      ease: DEFAULT_EASE,
      duration: 0.2,
    },
  },
};
