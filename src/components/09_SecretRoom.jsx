import { useContext } from "react";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function SecretRoom() {
  const { question, answer, handleAnswer, clearLevel } =
    useContext(MessageContext);
  const isCleared = clearLevel >= 9;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-[90%] ${
        isCleared ? "bg-transparent" : "bg-gray-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Secret Room"}</h1>
      <p className="text-purple-800">
        Message form Outside:
        <span className="text-yellow-800">
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-800">
        Reply from Secret Room:
        <span className="text-yellow-800">
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>
    </div>
  );
}
