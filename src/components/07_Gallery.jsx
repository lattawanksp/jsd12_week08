import { useContext } from "react";
import Nook from "./08_Nook";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function Gallery() {
  const { clearLevel } = useContext(MessageContext);
  const isCleared = clearLevel >= 7;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-red-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Gallery"}</h1>
      <Nook />
    </div>
  );
}
