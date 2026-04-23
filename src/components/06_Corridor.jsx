import { useContext } from "react";
import Gallery from "./07_Gallery";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function Corridor() {
  const { clearLevel } = useContext(MessageContext);
  const isCleared = clearLevel >= 6;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-orange-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Corridor"}</h1>
      <Gallery />
    </div>
  );
}
