import Tower from "./02_Tower";

export default function Castle({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-purple-300 w-full">
      <h1>Castle</h1>
      <Tower question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}
