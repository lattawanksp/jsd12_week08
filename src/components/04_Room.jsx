import Hall from "./05_Hall";

export default function Room({ question, answer, handleAnswer, clearLevel }) {
  const isCleared = clearLevel >= 4;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-green-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Room"}</h1>
      <Hall
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        clearLevel={clearLevel}
      />
    </div>
  );
}
