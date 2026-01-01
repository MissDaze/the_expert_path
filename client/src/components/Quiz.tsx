import { useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle, XCircle, Award } from 'lucide-react';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  moduleTitle: string;
}

export function Quiz({ questions, onComplete, moduleTitle }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      const finalScore = Math.round(((score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)) / questions.length) * 100);
      onComplete(finalScore);
    }
  };

  if (quizCompleted) {
    const finalScore = Math.round((score / questions.length) * 100);
    const passed = finalScore >= 70;

    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${passed ? 'bg-green-100' : 'bg-orange-100'}`}>
          {passed ? (
            <Award className="w-12 h-12 text-green-600" />
          ) : (
            <CheckCircle className="w-12 h-12 text-orange-600" />
          )}
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {passed ? 'Congratulations!' : 'Good Effort!'}
        </h2>
        
        <p className="text-xl text-gray-600 mb-4">
          You scored {finalScore}% on {moduleTitle}
        </p>
        
        <p className="text-gray-600 mb-8">
          {passed 
            ? 'You\'ve successfully completed this module!' 
            : 'Review the material and try again to improve your score.'}
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => window.history.back()}>
            Back to Course
          </Button>
          {passed && (
            <Button onClick={() => window.history.back()}>
              Continue Learning
            </Button>
          )}
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="bg-white rounded-lg p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {question.question}
      </h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showExplanation}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              selectedAnswer === index
                ? showExplanation
                  ? isCorrect
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {showExplanation && selectedAnswer === index && (
                isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'} border`}>
          <p className="font-semibold mb-2">
            {isCorrect ? '✓ Correct!' : 'ℹ Explanation'}
          </p>
          <p className="text-gray-700">{question.explanation}</p>
        </div>
      )}

      <div className="flex gap-4">
        {!showExplanation ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="flex-1"
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNext} className="flex-1">
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        )}
      </div>
    </div>
  );
}
