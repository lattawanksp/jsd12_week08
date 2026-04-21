import Gallery from "./07_Gallery";

export default function Corridor({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-orange-300 w-[90%]">
      <h1>Corridor</h1>
      <Gallery question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}
