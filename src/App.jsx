import { useState } from "react";
import Castle from "./components/01_Castle";
import SimpleAsyncAwait from "./examples/async/SimpleAsyncAwait";
import SimpleProAsyncAwait from "./examples/async/SimpleProAsyncAwait";

export default function App() {
  // creating state variable
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const showUsePower = answer.trim().toLowerCase() === "help";

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-200 text-black">
      <p className="text-purple-800">
        Message form Outside:
        <span className="text-yellow-800">
          {/*question or waiting for a massage*/}
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-800">
        Reply from Secret Room:
        <span className="text-yellow-800"></span>
        {answer ? answer : "Waiting for a reply..."}
      </p>

      {showUsePower && (
        <button className="bg-amber-300 text-black px-4 py-2 rounded">
          use power
        </button>
      )}
      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
      <SimpleAsyncAwait />
      <SimpleProAsyncAwait />
    </div>
  );
}
