import React from "react";
import { RxCross1, RxCrossCircled } from "react-icons/rx";
import { FiCircle } from "react-icons/fi";

export function Icon({ name }) {
  switch (name) {
    case "circle":
      return (
        <div className="imgCointainer">
          <FiCircle />
        </div>
      );
      break;
    case "cross":
      return (
        <div className="imgCointainer">
          <RxCross1 />
        </div>
      );
      break;
    case "empty":
      return (
        <div className="imgCointainer">
          <RxCrossCircled />
        </div>
      );
    default:
      return (
        <div className="imgCointainer">
          <RxCrossCircled />
        </div>
      );
      break;
  }
}
