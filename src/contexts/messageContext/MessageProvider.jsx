import { useState } from "react";
import { MessageContext } from "./MessageContext";

export const MessageProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [clearLevel, setClearLevel] = useState(0);

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleUsePower = () => {
    setClearLevel((prev) => Math.min(prev + 1, 9));
  };

  return (
    <MessageContext.Provider
      value={{
        question,
        answer,
        clearLevel,
        handleQuestion,
        handleAnswer,
        handleUsePower,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
