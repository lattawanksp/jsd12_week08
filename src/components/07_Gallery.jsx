import Nook from "./08_Nook";

export default function Gallery({
  question,
  answer,
  handleAnswer,
  clearLevel,
}) {
  const isCleared = clearLevel >= 7;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-red-300"
      }`}
    >
      <h1>Gallery</h1>
      <Nook
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        clearLevel={clearLevel}
      />
    </div>
  );
}
