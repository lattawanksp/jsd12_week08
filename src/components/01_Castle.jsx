import Tower from "./02_Tower";

export default function Castle({ question, answer, handleAnswer, clearLevel }) {
  const isCleared = clearLevel >= 1;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-purple-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Castle"}</h1>
      <Tower
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        clearLevel={clearLevel}
      />
    </div>
  );
}
