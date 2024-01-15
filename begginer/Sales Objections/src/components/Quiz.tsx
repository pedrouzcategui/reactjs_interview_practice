import React from "react";
import QUESTIONS from "../data";
import { TQuestion } from "../types";

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] =
        React.useState<number>(0);
    const [score, setScore] = React.useState<number>(0);

    const CURRENT_QUESTION = QUESTIONS[currentQuestionIndex];

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
            <div className="w-4/5">
                <QuizScore score={score} questions_length={QUESTIONS.length} />
                <QuestionCard
                    {...CURRENT_QUESTION}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    setScore={setScore}
                />
            </div>
        </main>
    );
}

type QuestionCardProps = TQuestion & {
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuestionCard({
    title,
    options,
    setCurrentQuestionIndex,
    setScore,
}: QuestionCardProps) {
    const [showAnswers, setShowAnswers] = React.useState<boolean>(false);

    const handleNextQuestion = () => {
        setShowAnswers(false);
        setCurrentQuestionIndex((prevState) => prevState + 1);
    };

    const handleAnswerSelection = (e: React.MouseEvent<HTMLElement>) => {
        setShowAnswers(true)
        let isCorrectString = e.currentTarget.getAttribute('data-iscorrect');
        setScore((score) => {
            if (isCorrectString == "true") {
                return score + 1
            }
            return score;
        });
    };

    return (
        <div className="p-8 my-8 bg-white rounded-xl shadow-lg">
            <h1 className="text-lg font-bold text-center mb-4">The Client Says:</h1>
            <p className="text-4xl text-center font-bold mb-8 block">{title}</p>
            <p className="font-bold mb-2">And you say:</p>
            <div className="grid grid-cols-2 gap-4">
                {options.map((option, i) => {
                    return (
                        <div key={`${option.label}-${i}`}>
                            <button
                                disabled={showAnswers}
                                data-iscorrect={option.isCorrect}
                                onClick={handleAnswerSelection}
                                className={`min-h-[150px] w-full text-center border-2 p-2 ${showAnswers &&
                                    (option.isCorrect ? "border-green-600" : "border-red-600")
                                    }`}
                            >
                                {option.label}
                            </button>
                            {showAnswers && (
                                <p>{option.isCorrect ? "Correct!" : "Incorrect"}</p>
                            )}
                        </div>
                    );
                })}
            </div>
            {showAnswers && (
                <div className="flex justify-end">
                    <button
                        onClick={handleNextQuestion}
                        className="bg-black text-white py-2 px-4"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

type QuizScoreProps = {
    score: number;
    questions_length: number;
};

function QuizScore({ score, questions_length }: QuizScoreProps) {
    return (
        <p className="text-lg text-center">
            Score: {score}/{questions_length}
        </p>
    );
}
