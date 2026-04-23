import Corridor from "./06_Corridor";

export default function Hall({ question, answer, handleAnswer, clearLevel }) {
  const isCleared = clearLevel >= 5;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-amber-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Hall"}</h1>
      <Corridor
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        clearLevel={clearLevel}
      />
    </div>
  );
}
