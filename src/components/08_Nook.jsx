import { useContext } from "react";
import SecretRoom from "./09_SecretRoom";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function Nook() {
  const { clearLevel } = useContext(MessageContext);
  const isCleared = clearLevel >= 8;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-pink-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Nook"}</h1>
      <SecretRoom />
    </div>
  );
}
