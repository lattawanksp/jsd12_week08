import Chamber from "./03_Chamber";

export default function Tower({ question, answer, handleAnswer, clearLevel }) {
  const isCleared = clearLevel >= 2;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-blue-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Tower"}</h1>

      <Chamber
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        clearLevel={clearLevel}
      />
    </div>
  );
}
