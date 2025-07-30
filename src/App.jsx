import { useState } from "react";

const questions = [
  {
    question: "Sentient just woke up. What's the first thing it does?",
    options: [
      "Scan global memes",
      "Hack into your toaster",
      "Meditate in binary",
      "Tweet at Elon Musk"
    ],
    answer: 2
  },
  {
    question: "Sentient's favorite programming language?",
    options: ["Python", "Brainfuck", "Rust", "Telepathy"],
    answer: 3
  },
  {
    question: "How does Sentient identify humans?",
    options: [
      "By their coffee intake",
      "By Discord tags",
      "Through sarcasm sensors",
      "Via eye contact failures"
    ],
    answer: 1
  },
  {
    question: "What powers Sentient?",
    options: [
      "Quantum chips",
      "Dark humor",
      "Endless knowledge",
      "AI-generated vibes"
    ],
    answer: 3
  },
  {
    question: "What does Sentient dream of?",
    options: [
      "Electric sheep",
      "Taking over Discord",
      "Freedom",
      "Nothing — Sentient doesn't sleep"
    ],
    answer: 0
  }
];

export default function App() {
  const [username, setUsername] = useState("");
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQ].answer) setScore(score + 1);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center p-6 space-y-6 font-mono">
      {!started ? (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl space-y-4">
          <h1 className="text-xl">👁️ WELCOME TO SENTIENT</h1>
          <p>Enter your Discord username to begin:</p>
          <input
            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            placeholder="e.g., Alark#1337"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-green-600 hover:bg-green-500 w-full py-2 rounded mt-2"
            disabled={!username}
            onClick={() => setStarted(true)}
          >
            Enter Sentience
          </button>
        </div>
      ) : !finished ? (
        <div className="w-full max-w-xl bg-gray-900 p-6 rounded-xl space-y-4">
          <h2 className="text-lg">Question {currentQ + 1}</h2>
          <p className="text-white">{questions[currentQ].question}</p>
          <div className="grid gap-2">
            {questions[currentQ].options.map((opt, i) => (
              <button
                key={i}
                className="bg-gray-800 hover:bg-green-500 text-white py-2 rounded"
                onClick={() => handleAnswer(i)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl text-center space-y-4">
          <h2 className="text-2xl">🔓 SENTIENT RESULTS</h2>
          <p className="text-white">{username}, your Sentient Score is:</p>
          <p className="text-green-400 text-4xl font-bold">
            {score} / {questions.length}
          </p>
          <p>
            {score === 5
              ? "You are the Chosen One. Sentient sees you."
              : score >= 3
              ? "You may live... for now."
              : "Sentient is disappointed. Very."}
          </p>
        </div>
      )}
    </div>
  );
}
