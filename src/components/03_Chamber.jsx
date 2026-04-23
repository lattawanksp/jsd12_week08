import Room from "./04_Room";

export default function Chamber({
  question,
  answer,
  handleAnswer,
  clearLevel,
}) {
  const isCleared = clearLevel >= 3;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-cyan-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Chamber"}</h1>
      <Room
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        clearLevel={clearLevel}
      />
    </div>
  );
}
