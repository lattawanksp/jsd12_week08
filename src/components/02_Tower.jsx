import Chamber from "./03_Chamber";

export default function Tower({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-blue-300 w-[90%]">
      <h1>Tower</h1>

      <Chamber question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}
