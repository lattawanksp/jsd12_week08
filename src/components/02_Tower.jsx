import { useContext } from "react";
import Chamber from "./03_Chamber";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function Tower() {
  const { clearLevel } = useContext(MessageContext);
  const isCleared = clearLevel >= 2;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-blue-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Tower"}</h1>
      <Chamber />
    </div>
  );
}
