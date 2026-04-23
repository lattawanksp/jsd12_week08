import { useContext } from "react";
import Room from "./04_Room";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function Chamber() {
  const { clearLevel } = useContext(MessageContext);
  const isCleared = clearLevel >= 3;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-cyan-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Chamber"}</h1>
      <Room />
    </div>
  );
}
