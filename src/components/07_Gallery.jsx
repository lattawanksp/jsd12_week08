import Nook from "./08_Nook";

export default function Gallery({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-red-300 w-[90%]">
      <h1>Gallery</h1>
      <Nook question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}
