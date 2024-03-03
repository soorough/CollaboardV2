import { atom } from "recoil"

const zoomState = atom({
    key: 'zoomKey',
    default: 100,
  });

const gridbutton = atom({
    key: 'gridKey',
    default: false,
})

export {zoomState, gridbutton}