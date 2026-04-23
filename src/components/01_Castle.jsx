import { useContext } from "react";
import Tower from "./02_Tower";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function Castle() {
  const { clearLevel } = useContext(MessageContext);
  const isCleared = clearLevel >= 1;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-purple-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Castle"}</h1>
      <Tower />
    </div>
  );
}
