import { useContext } from "react";
import Hall from "./05_Hall";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function Room() {
  const { clearLevel } = useContext(MessageContext);
  const isCleared = clearLevel >= 4;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-green-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Room"}</h1>
      <Hall />
    </div>
  );
}
