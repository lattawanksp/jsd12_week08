import Room from "./04_Room";

export default function Chamber({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-cyan-300 w-[90%]">
      <h1>Chamber</h1>
      <Room question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}
