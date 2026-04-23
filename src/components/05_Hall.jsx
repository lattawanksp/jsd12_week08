import { useContext } from "react";
import Corridor from "./06_Corridor";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function Hall() {
  const { clearLevel } = useContext(MessageContext);
  const isCleared = clearLevel >= 5;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-amber-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Hall"}</h1>
      <Corridor />
    </div>
  );
}
