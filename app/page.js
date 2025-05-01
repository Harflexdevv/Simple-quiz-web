'use client';

import QuestionCard from './components/Card';



import { useState } from 'react';

const quizData = [
  {
    question: 'What is 2 + 2?',
    options: ['2', '4', '6'],
    correctAnswer: '4',
  },
  {
    question: 'What color is the sky?',
    options: ['Green', 'Blue', 'Red'],
    correctAnswer: 'Blue',
  },
  {
    question: 'Which is a fruit?',
    options: ['Carrot', 'Potato', 'Banana'],
    correctAnswer: 'Banana',
  },
];

export default function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected) => {
    const currentQuestion = quizData[current];
    if (selected === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < quizData.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>🧠 Quiz App</h2>

      {finished ? (
        <div>
          <h3>🎉 Quiz Completed!</h3>
          <p>Your Score: {score} / {quizData.length}</p>
        </div>
      ) : (
        <div>
          <p>Question {current + 1} of {quizData.length}</p>
          <QuestionCard
            question={quizData[current].question}
            options={quizData[current].options}
            onAnswer={handleAnswer}
          />
          
          
        </div>
      )}
    </div>
  );
}