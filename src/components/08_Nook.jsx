import SecretRoom from "./09_SecretRoom";

export default function Nook({ question, answer, setAnswer }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-pink-300 w-[90%]">
      <h1>Nook</h1>
      <SecretRoom question={question} answer={answer} setAnswer={setAnswer} />
    </div>
  );
}
