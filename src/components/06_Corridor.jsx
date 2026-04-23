import Gallery from "./07_Gallery";

export default function Corridor({
  question,
  answer,
  handleAnswer,
  clearLevel,
}) {
  const isCleared = clearLevel >= 6;

  return (
    <div
      className={`flex flex-col justify-center items-center pt-10 w-full ${
        isCleared ? "bg-transparent" : "bg-orange-300"
      }`}
    >
      <h1>{isCleared ? "Clear" : "Corridor"}</h1>
      <Gallery
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        clearLevel={clearLevel}
      />
    </div>
  );
}
