import { useState } from "react";

export default function Quiz() {
    const [selectedAnswer, setSelectedAnswer] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);

    const questions = [
        {
            question: "Who was the founder of Pakistan?",
            options: ["Allama Iqbal", "Liaquat Ali Khan", "Zulfikar Ali Bhutto", "Muhammad Ali Jinnah"],
            correctAnswer: "Muhammad Ali Jinnah",
            id: 1
        },
        {
            question: "What is the national language of Pakistan?",
            options: ["Urdu", "Punjabi", "English", "Pashto"],
            correctAnswer: "Urdu",
            id: 2
        },
        {
            question: "Which river is considered the lifeline of Pakistan?",
            options: ["Nile", "Indus", "Ganges", "Amazon"],
            correctAnswer: "Indus",
            id: 3
        },
        {
            question: "In which year did Pakistan become an independent country?",
            options: ["1947", "1950", "1965", "1971"],
            correctAnswer: "1947",
            id: 4
        },
        {
            question: "Which mountain is the highest in Pakistan?",
            options: ["K2", "Nanga Parbat", "Mount Everest", "Makalu"],
            correctAnswer: "K2",
            id: 5
        }
    ];

    function handleOptionChange(event, questionId) {
        setSelectedAnswer(prevAnswers => ({
            ...prevAnswers,
            [questionId]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setQuizCompleted(true);
    }

    return (
        <>
            <h1 className="text-center">Pakistan Quiz</h1>
            <div className="container">
                <div className="row mx-auto align-items-center justify-content-center">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            {questions.map((question) => (
                                <div key={question.id} className="mb-4">
                                    <h4>{question.question}</h4>
                                    <div className="form-group">
                                        {question.options.map((option, index) => (
                                            <div className="form-check" key={index}>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={`question-${question.id}`}
                                                    value={option}
                                                    onChange={(e) => handleOptionChange(e, question.id)}
                                                    checked={selectedAnswer[question.id] === option}
                                                />
                                                <label className="form-check-label" htmlFor={`question-${question.id}-${option}`}>
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <input className="btn btn-primary mt-4" type="submit" value="Submit" />
                        </form>

                        {quizCompleted && (
                            <div className="mt-4">
                                {questions.map((question) => {
                                    const isCorrect = selectedAnswer[question.id] === question.correctAnswer;
                                    return (
                                        <div key={question.id} className={`alert ${isCorrect ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`}>
                                            <strong>{isCorrect ? 'Correct!' : 'Incorrect!'}</strong> {question.question}
                                            <br />
                                            <strong>Your Answer: </strong> {selectedAnswer[question.id]}
                                            <br />
                                            <strong>Correct Answer: </strong> {question.correctAnswer}
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
