import { TOTALCLICK } from "../actionType";

export const getTotalClick = (id, pointerEvents, totalprice,anun,gin,qanak,kochak) => ({
  type: TOTALCLICK,
  id,
  pointerEvents,
  totalprice,
  anun,
  gin,
  qanak,
  kochak,
})