export default function SecretRoom({ question, answer, setAnswer }) {
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-300 w-[90%]">
      <h1>Secret Room</h1>
      <p className="text-purple-800">
        Message for JSD12:
        <span className="text-yellow-800">
          {/*question or waiting for a massage*/}
          {question ? question : "Waiting for a message..."}
        </span>
      </p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <p className="text-green-800">
        Reply from Secret Room:
        <span className="text-yellow-800">
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>
    </div>
  );
}
